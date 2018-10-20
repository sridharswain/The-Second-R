package com.thesecondr;

import android.app.ProgressDialog;
import android.content.Context;
import android.support.v7.app.AlertDialog;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by sid on 20/10/18.
 */

public class ActivityIndicator extends ReactContextBaseJavaModule {

    ProgressDialog dialog;
    Context context;
    public ActivityIndicator(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext.getApplicationContext();
    }

    @Override
    public String getName() {
        return "ActivityIndicator";
    }

    @ReactMethod
    public void start(){
        dialog = ProgressDialog.show(context, "Processing", "");
        dialog.setCancelable(false);
    }

    @ReactMethod
    public void stop(){
        if(dialog != null) dialog.hide();
    }

}
