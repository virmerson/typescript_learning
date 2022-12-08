class GroupOfStudends  {

    list:string[]=[]; //member or property

    study(){
        console.log("Studying ....")
    }
}



//an interface inherits a class 
interface Students extends GroupOfStudends {

}


class Engineering extends GroupOfStudends implements Students{

}  

class Law extends GroupOfStudends implements Students{

}
