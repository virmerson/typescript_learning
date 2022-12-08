interface Mailable{
    send (email:string):boolean
    queue(email:string):boolean
    
}

interface FutureMailable extends Mailable{
    later(email: string, after: number): void
}

interface Writeable {
    write(doc:string):void
}

//extending multiple interface
interface WriteAndMail extends  FutureMailable, Writeable{
    read(doc:string):string
}



class Mail implements WriteAndMail{
    read(doc: string): string {
        throw new Error("Method not implemented.")
    }
    later(email: string, after: number): void {
        throw new Error("Method not implemented.")
    }
    send(email: string): boolean {
        throw new Error("Method not implemented.")
    }
    queue(email: string): boolean {
        throw new Error("Method not implemented.")
    }
    write(doc: string): void {
        throw new Error("Method not implemented.")
    }

}



class Contract implements Mailable{

    register(){

    }
    send(email: string): boolean {
        //code here
        return true
    }

    queue(email: string): boolean {
      //code here
      return true
    }

}



class CancelContract implements Mailable{

    cancel(){

    }
    send(email: string): boolean {
        //code here
        return true
    }

    queue(email: string): boolean {
      //code here
      return true
    }

}

class ContactClient implements FutureMailable{
    later(email: string, after: number): void {
        throw new Error("Method not implemented.")
    }
    send(email: string): boolean {
        throw new Error("Method not implemented.")
    }
    queue(email: string): boolean {
        throw new Error("Method not implemented.")
    }


}

