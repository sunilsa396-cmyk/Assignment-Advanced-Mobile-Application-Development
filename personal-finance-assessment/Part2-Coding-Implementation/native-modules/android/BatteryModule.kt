package com.yourapp

import android.content.Context
import android.os.PowerManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.ReactMethod

class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "BatteryModule"
  }

  @ReactMethod
  fun isIgnoringBatteryOptimizations(promise: Promise) {
    val pm = reactApplicationContext.getSystemService(Context.POWER_SERVICE) as PowerManager
    val packageName = reactApplicationContext.packageName
    val ignored = pm.isIgnoringBatteryOptimizations(packageName)
    promise.resolve(ignored)
  }

  private fun sendBatteryEvent(name: String, value: String) {
    reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(name, value)
  }
}
