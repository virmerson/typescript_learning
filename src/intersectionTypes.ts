interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

//intersection of type
type Employee2 = Identity & Contact

let empl1: Employee2 = {
    id: 1,
    name: "jao",
    email: "jao@gmail.com",
    phone: "1234"
}

let empl2: Employee2 = {
     id: 2, 
     name: "zé", 
     email: 'ze@gmail.com', 
     phone: '111'
    }

