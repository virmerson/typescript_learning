import {Validator} from './validator'

class CPFValidator implements Validator{
    isValid(s:string): boolean {
       if(s==""){
        return false
       }
       return true
    }
}

export {CPFValidator}