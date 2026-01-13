export const userData = {
  validUser: {
    email: 'test123@gmail.com',
    password: '123456'
  },
  invalidUser: {
    email: 'invalid.com',
    password: '12345'
  },
  emptyCredentials: {
    email: '',
    password: ''
  }
};

export const nickname ={
  username : 'TestAutomation1'
} 
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

export const postContentOnly = {
  content: 'test post content only'
};

export const commentContentOnly = {
  content: 'test comment'
};
