/* LógicoRedeSocial_1: */

CREATE TABLE user (
    login_date date,
    user_ID numeric PRIMARY KEY,
    name varchar,
    interest varchar
);

CREATE TABLE post (
    post_ID numeric,
    likes_number numeric,
    content varchar,
    share numeric,
    publication_date date,
    video_URL varchar,
    image_URL varchar,
    post_TIPO INT,
    PRIMARY KEY (post_ID, video_URL, image_URL)
);

CREATE TABLE comment (
    text varchar,
    comment_date date,
    comment_ID numeric,
    GIF_URL varchar,
    image_URL varchar,
    comment_TIPO INT,
    PRIMARY KEY (comment_ID, GIF_URL, image_URL)
);

CREATE TABLE friendship (
    friendship_ID numeric PRIMARY KEY,
    friendship_date date
);

CREATE TABLE usar_post (
    fk_post_post_ID numeric,
    fk_post_video_URL varchar,
    fk_post_image_URL varchar,
    fk_user_user_ID numeric
);

CREATE TABLE comment_post (
    fk_comment_comment_ID numeric,
    fk_comment_GIF_URL varchar,
    fk_comment_image_URL varchar,
    fk_post_post_ID numeric,
    fk_post_video_URL varchar,
    fk_post_image_URL varchar
);

CREATE TABLE user_friendship (
    fk_user_user_ID numeric,
    fk_friendship_friendship_ID numeric
);

CREATE TABLE user_comment (
    fk_comment_comment_ID numeric,
    fk_comment_GIF_URL varchar,
    fk_comment_image_URL varchar,
    fk_user_user_ID numeric
);
 
ALTER TABLE usar_post ADD CONSTRAINT FK_usar_post_1
    FOREIGN KEY (fk_post_post_ID, fk_post_video_URL, fk_post_image_URL)
    REFERENCES post (post_ID, video_URL, image_URL)
    ON DELETE RESTRICT;
 
ALTER TABLE usar_post ADD CONSTRAINT FK_usar_post_2
    FOREIGN KEY (fk_user_user_ID)
    REFERENCES user (user_ID)
    ON DELETE RESTRICT;
 
ALTER TABLE comment_post ADD CONSTRAINT FK_comment_post_1
    FOREIGN KEY (fk_comment_comment_ID, fk_comment_GIF_URL, fk_comment_image_URL)
    REFERENCES comment (comment_ID, GIF_URL, image_URL)
    ON DELETE RESTRICT;
 
ALTER TABLE comment_post ADD CONSTRAINT FK_comment_post_2
    FOREIGN KEY (fk_post_post_ID, fk_post_video_URL, fk_post_image_URL)
    REFERENCES post (post_ID, video_URL, image_URL)
    ON DELETE RESTRICT;
 
ALTER TABLE user_friendship ADD CONSTRAINT FK_user_friendship_1
    FOREIGN KEY (fk_user_user_ID)
    REFERENCES user (user_ID)
    ON DELETE RESTRICT;
 
ALTER TABLE user_friendship ADD CONSTRAINT FK_user_friendship_2
    FOREIGN KEY (fk_friendship_friendship_ID)
    REFERENCES friendship (friendship_ID)
    ON DELETE RESTRICT;
 
ALTER TABLE user_comment ADD CONSTRAINT FK_user_comment_1
    FOREIGN KEY (fk_comment_comment_ID, fk_comment_GIF_URL, fk_comment_image_URL)
    REFERENCES comment (comment_ID, GIF_URL, image_URL)
    ON DELETE RESTRICT;
 
ALTER TABLE user_comment ADD CONSTRAINT FK_user_comment_2
    FOREIGN KEY (fk_user_user_ID)
    REFERENCES user (user_ID)
    ON DELETE RESTRICT;