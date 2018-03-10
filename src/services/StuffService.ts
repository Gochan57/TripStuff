import * as Model from '../models'
import {StuffPack} from '../models'
const packs: Model.StuffPackResource[] = require('../resources/stuff.json')

class StuffService {
    public loadStuffFromResources(): Model.StuffPack[] {
        if (packs) {
            return packs.map((pack: Model.StuffPackResource) => new StuffPack(pack))
        }
        return []
    }
}

const stuffService = new StuffService()
export default stuffService