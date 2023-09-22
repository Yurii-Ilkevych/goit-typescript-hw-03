interface IKey {
getSignature(): number
}
interface IPerson{
    getKey(): Key 
}
interface IHouse{
    comeIn(person: Person):void
    openDoor(key: Key ): boolean
}

class Key implements IKey {
    constructor(private signature: number = Math.floor(Math.random() * 10000) + 1){}
    getSignature(): number{
        return this.signature
    }
}

class Person implements IPerson  {
constructor(private key: Key, ){
}
    getKey(): Key{
        return this.key
    }

} 


abstract class House implements IHouse {
    protected door: boolean = false
    protected key: Key
    private tenants: Person[] = []
    constructor(key: Key){
        this.key = key
    }


    comeIn(person: Person):void{
        if(person.getKey() === this.key){
            this.door = true
            this.tenants.push(person)
        }
      }

   public   abstract openDoor(key: Key ): boolean

}

class MyHouse extends House {
    public openDoor(key: Key): boolean {
        if(this.key.getSignature() === key.getSignature()){
            return true
        }
        return false
    }

}



const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);


house.openDoor(person.getKey());

house.comeIn(person);


export {};