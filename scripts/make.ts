import {root} from '../root'
import {make} from 'jton'

make({
    root: root,
    compile: [
        'src/contracts/Demiurge',
        'src/contracts/Customer',
        'src/contracts/Vendor',
    ],
    compiler: '0.47.0',
    linker: '0.11.77',
    stdlib: '0.47.0'
}).then().catch((e: any) => console.log(e))