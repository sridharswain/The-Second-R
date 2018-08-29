package com.thesecondr;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.tasks.Task;
import com.facebook.react.bridge.Callback;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    static Callback signInCallback;
    @Override
    protected String getMainComponentName() {
        return "thesecondr";
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == 0){
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            GoogleSignInAccount account = task.getResult();
            android.widget.Toast.makeText(getApplicationContext(), account.getEmail(),android.widget.Toast.LENGTH_LONG).show();
            signInCallback.invoke(account.getDisplayName(),account.getEmail());
        }
    }
}
