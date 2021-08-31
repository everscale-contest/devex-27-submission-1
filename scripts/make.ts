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
        'src/contracts/assets/broxusTip3/BroxusTip3AssetRoot',
        'src/contracts/assets/broxusTip3/BroxusTip3Asset',
        'src/contracts/services/period/PeriodServiceRoot',
        'src/contracts/services/period/PeriodService',
        'src/contracts/services/period/PeriodSubscription',
        'src/contracts/services/period/offers/crystal/PeriodCrystalOfferRoot',
        'src/contracts/services/period/offers/crystal/PeriodCrystalOffer',
        'src/contracts/services/period/offers/crystal/PeriodCrystalAccepter',
        'tests/_src/contracts/RootTokenContractOwner',
        'tests/_src/contracts/BroxusTip3AssetOwner',
        'tests/_src/contracts/CrystalAssetOwner',
        'tests/_src/contracts/PayloadGenerator'
    ],
    compiler: '0.49.0',
    linker: '0.13.21',
    stdlib: '0.49.0'
}).then().catch((e: any) => console.log(e))