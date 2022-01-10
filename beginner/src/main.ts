/***************************************
    TypeScript transpiles code to JavaScript
        tsc main.ts -w

    Or when we add tsconfig.json at root directory with
    paths specified in the json,
        tsc -w
****************************************/
const a = "1";
console.log("aaa", a);



/***************************************
    Typescript Type definitions introduction
****************************************/
let hello: string = "world";
hello = "foo";



/***************************************
    Function in TypeScript:
    const name_of_func = (param1: type_of_param1, param2: type_of_param2) : return_type ... 
****************************************/
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Master", "Lessons"));



/***************************************
    Introduction to Interfaces in Typescript

    In const user, we shorten "const user: {name: string, age: number} = ..." to just "const user: UserInterface = ..."
    by creating an interface

    In const user2, we add a question mark after "age", where ? means optional
****************************************/
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: UserInterface = {
    name: "Master",
    age: 30,
    getMessage() {
        return "Hello" + name;
    },
};
 
const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello" + name;
    },
};

console.log(user.name)



/***************************************
    Union & Type alias in Typescript
****************************************/
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface AnotherUserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTag: PopularTag[] = ["dragon", "coffee"]; 
 
const dragonsTag: MaybePopularTag = "dragon";

let username: string = "William";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let anotherUser: AnotherUserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object



/***************************************
    Any, never, void, unknown in Typescript

    Avoid the use of "any" to avoid errors
****************************************/
const doSomething = (): void => {
    console.log("doSomething");
};

const doSomethingElse = (): never => {
    throw "never";
};

let foo: any = "foo";
console.log(foo.bar());

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number;

console.log(s1);
console.log(s2);



/***************************************
Typescript Working with DOM

    Don't do the following:
        const someElement = document.querySelector(".foo");    
        console.log('someElement', (someElement as any).value);
****************************************/
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log('someElement', someElement.value);

const someOtherElement = document.querySelector(".foo")
someOtherElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value);
});



/***************************************
Creating classes in Typescript
****************************************/
interface AnotherUserInterface {
    getFullname(): string;
}

class User {
    firstName: string;
    lastName: string;
    readonly unchangeableName: string
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }

    changeUnchangeableName(): void {
        /* this.unchangeableName = "foo"; */
    }

    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const userInstance = new User("Monster", "lessons");
console.log(userInstance.firstName);
console.log(User.maxAge);


const admin = new Admin("Foo", "Bar");
console.log(admin)



/***************************************
Generics interfaces and functions in Typescript

When we use extends object, we specify type as an object and cannot use a type like
    const result = addId<string>("Foo");
****************************************/
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    };
};

interface someOtherUserInterface<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user3: someOtherUserInterface<{ meta: string }, string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: "bar",
};

const user4: someOtherUserInterface<string[], string> = {
    name: "John",
    data: ['foo', 'bar', 'baz'],
    meta: "baz", 
};

// const result = addId<someOtherUserInterface>(user3);
// console.log("result", result);



/***************************************
How to use Enums in Typescript
****************************************/
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// };

// console.log(statuses.inProgress);

enum StatusEnum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done",
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);