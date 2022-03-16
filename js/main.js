import {createSimilarAdd} from './data.js';
import { renderPopup } from './markup-generation.js';

const similarAdds = createSimilarAdd(10);
renderPopup(similarAdds[0]);

