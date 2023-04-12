import { createPhotoInform } from './data.js';
import { modifiedPhotoList } from './photo-render.js';
import { modifiedCommentList } from './big-picture.js';
import { createComments } from './data.js';
// import { bigPictureInfo } from './big-picture.js';


modifiedPhotoList(createPhotoInform());
modifiedCommentList(createComments());
// bigPictureInfo();
