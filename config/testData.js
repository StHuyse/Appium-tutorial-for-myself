import { generateRandomEmail } from '#roots/utils/helper.js'
import { generateRandomUsername } from '#roots/utils/helper.js';
//Sign in data
export const userData = {
  validUser: {
    email: 'khua01@gmail.com',
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

//Sign up data
export const signUpData = {
  validRegister: {
    email: generateRandomEmail(),
    password: '123456',
    confirmPassword: '123456'
  },
  invalidRegister:{
    wrongEmail:{
      email: 't@.om',
      password: '123456',
      confirmPassword: '123456'
    },
    wrongPassword:{
      email: generateRandomEmail(),
      password: '12345',
      confirmPassword: '123456'
    },
    wrongConfirmPassword:{
      email: generateRandomEmail(),
      password: '123456',
      confirmPassword: '12345'
    }
  }
}
export const nickname ={
  username : generateRandomUsername()
} 

export const timeouts = {
  short: 5000,
  medium: 10000,
  long: 30000
};

// post and post interaction data
export const contentOnly = {
  content: 'test automation content only!'
};

//Core user is used for running forgot passsword flow
export const coreUser = {
  username: 'khua01@gmail.com'
}
