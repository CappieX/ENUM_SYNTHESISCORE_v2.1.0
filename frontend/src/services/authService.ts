import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { UserProfile, UserRole } from "../store/useSynthesisStore";

// Helper to safely extract error details
const getErrorDetails = (err: unknown) => {
  if (err && typeof err === 'object' && 'code' in err && 'message' in err) {
    return {
      code: (err as { code: string }).code,
      message: (err as { message: string }).message,
      stack: (err as { stack?: string }).stack,
    };
  }
  if (err instanceof Error) {
    return {
      code: 'unknown',
      message: err.message,
      stack: err.stack,
    };
  }
  return {
    code: 'unknown',
    message: String(err),
    stack: undefined,
  };
};

export const authService = {
  /**
   * Register a new user and default their role to 'free'
   */
  signUp: async (email: string, pass: string): Promise<UserProfile> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: 'free'
      };

      // Save profile with role in Firestore
      await setDoc(doc(db, "users", user.uid), {
        role: 'free',
        email: user.email,
        createdAt: new Date().toISOString()
      });

      return profile;
    } catch (err) {
      const error = getErrorDetails(err);
      console.error('🔥 signUp error:', error);
      throw err;
    }
  },

  /**
   * Sign in and fetch user role from Firestore
   */
  signIn: async (email: string, pass: string): Promise<UserProfile> => {
    try {
      console.log('🔐 Attempting sign-in for:', email);
      
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      console.log('✅ Firebase auth success, UID:', userCredential.user.uid);
      
      const user = userCredential.user;
      
      // Fetch role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role: UserRole = userDoc.exists() ? userDoc.data().role : 'free';

      console.log('👤 User role:', role);

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role
      };
    } catch (err) {
      const error = getErrorDetails(err);
      console.error('🔥 signIn error:', error);
      throw err;
    }
  },
  
  /**
   * Sign out the current user
   */
  logOut: async () => {
    try {
      await signOut(auth);
      console.log('👋 User signed out');
    } catch (err) {
      const error = getErrorDetails(err);
      console.error('🔥 logOut error:', error);
      throw err;
    }
  },

  /**
   * Listen for auth changes and fetch profile
   */
  subscribeToAuthChanges: (callback: (profile: UserProfile | null) => void) => {
    return onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const role: UserRole = userDoc.exists() ? userDoc.data().role : 'free';
          
          callback({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role
          });
        } else {
          callback(null);
        }
      } catch (err) {
        const error = getErrorDetails(err);
        console.error('🔥 auth state change error:', error);
        callback(null);
      }
    });
  }
};