import {root} from '../root'
import {make} from 'jton'

make({
    root: root,
    compile: [
        'src/contracts/Demiurge',
        'src/contracts/Customer',
        'src/contracts/Vendor',
        'src/contracts/assets/crystal/CrystalAssetRoot',
        'src/contracts/assets/crystal/CrystalAsset',

        // Tests
        'tests/_src/contracts/CrystalAssetOwner'
    ],
    compiler: '0.47.0',
    linker: '0.13.2',
    stdlib: '0.47.0'
}).then().catch((e: any) => console.log(e))