import {createSimilarAdd} from './data.js';
import { renderPopup } from './markup-generation.js';

const similarAdds = createSimilarAdd(1);
renderPopup(similarAdds[0]);

