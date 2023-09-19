export interface User {
    meta: ContactSchema;
    _id: string;
}

interface ContactSchema {
    contact: {
        email: {   // remove type
            type: string
        },
        phone: {
            type: String
        },
        location: {
            type: String
        }
    };
    name: {
        type: String
    };
}
