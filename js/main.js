import { createPhotoInform } from './data.js';
import { modifiedPhotoList } from './photo-render.js';
import { modifiedCommentList } from './big-picture.js';
import { createComments } from './data.js';
import './pop-up.js';
import './user-form.js';


modifiedPhotoList(createPhotoInform());
modifiedCommentList(createComments());

