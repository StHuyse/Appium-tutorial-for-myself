export const testData = {
  validUser: {
    email: 'khua01@gmail.com',
    password: '123456'
  },
  invalidUser: {
    email: 'invalid.com',
    password: 'wrongpassword'
  },
  emptyCredentials: {
    email: '',
    password: ''
  }
};

export const appConfig = {
  appPackage: 'com.minhtu.firesocialmedia',
  appActivity: 'com.minhtu.firesocialmedia.android.MainActivity',
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'Android Devices',
  autoGrantPermissions: true
};

export const timeouts = {
  short: 5000,
  medium: 10000,
  long: 30000
};
