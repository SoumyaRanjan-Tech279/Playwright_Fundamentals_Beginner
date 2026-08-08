export function printAge(age){
    console.log(`The age of the person is ${age}`);
}


export class CustomerDetails{

    printFirstname(firstname){
        console.log(`The first name of the customer is ${firstname}`);
    }

    printLastname(lastname){
        console.log(`The last name of the customer is ${lastname}`);
    }

}

export class CustomerDetails1{

    printFirstname(firstname){
        console.log(`The first name of the customer is ${firstname}`);
    }

    printLastname(lastname){
        console.log(`The last name of the customer is ${lastname}`);
    }

}

export class CustomerDetails2{

    printFirstname(firstname){
        console.log(`The first name of the customer is ${firstname}`);
    }

    printLastname(lastname){
        console.log(`The last name of the customer is ${lastname}`);
    }

}


class CustomerDetails3{

    /**
     * This method will print the first name of the customer    
     * @param {string} firstname1 
     */
    printFirstname1(firstname1){
        console.log(`The first name of the customer is ${firstname1}`);
    }
    /**
     * This method will print the last name of the customer
     * @param {string} lastname1 
     */
    printLastname1(lastname1){
        console.log(`The last name of the customer is ${lastname1}`);
    }

}

export const customerDetails3 = new CustomerDetails3();