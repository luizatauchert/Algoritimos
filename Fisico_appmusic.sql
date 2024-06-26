/* Lógico_appmusic: */

CREATE TABLE Music (
    ID_music Number(5) PRIMARY KEY,
    Music_style Varchar(20),
    Productor Varcher(50),
    Duration Number(4),
    Lyrics Varchar(999),
    Videoclip Varchar(100)
);

CREATE TABLE Album (
    ID_Album Number(5) PRIMARY KEY,
    Name Varchar(50),
    Released_Year Date(4),
    Type_album Varchar(20),
    Duration Number(4)
);

CREATE TABLE Singer (
    ID_Singer Number(5) PRIMARY KEY,
    Name (50),
    Nacionality Varchar(20),
    Monthly_listeners Number(999),
    Album_amount Number(60),
    songs_belonging Varchar(999),
    Merch Varchar(50),
    Current_Events Varchar
);

CREATE TABLE User (
    ID_user Number(10) PRIMARY KEY,
    Name Varchar(50),
    Password Number(20),
    Email Varchar(50),
    Music_Historic Varchar(100),
    Liked_playlist Varchar(50),
    Create_playlist Varchar(50),
    Number_of_followers Number(999),
    Followed Number(999)
);

CREATE TABLE Type_flat (
    Individual_Premium Bool,
    University_premium Bool,
    Family_premium Bool,
    Free Bool,
    Duo_premium Bool,
    ID_Flat (5) PRIMARY KEY
);

CREATE TABLE Buy (
    fk_Type_flat_ID_Flat (5),
    fk_User_ID_user Number(10)
);

CREATE TABLE Have_Singer_Music_Album (
    fk_Singer_ID_Singer Number(5),
    fk_Music_ID_music Number(5),
    fk_Album_ID_Album Number(5)
);

CREATE TABLE Listen_Music_USer (
    fk_Music_ID_music Number(5),
    fk_User_ID_user Number(10),
    Date Date(10),
    Time Number(5)
);
 
ALTER TABLE Buy ADD CONSTRAINT FK_Buy_1
    FOREIGN KEY (fk_Type_flat_ID_Flat)
    REFERENCES Type_flat (ID_Flat)
    ON DELETE RESTRICT;
 
ALTER TABLE Buy ADD CONSTRAINT FK_Buy_2
    FOREIGN KEY (fk_User_ID_user)
    REFERENCES User (ID_user)
    ON DELETE RESTRICT;
 
ALTER TABLE Have_Singer_Music_Album ADD CONSTRAINT FK_Have_Singer_Music_Album_1
    FOREIGN KEY (fk_Singer_ID_Singer)
    REFERENCES Singer (ID_Singer)
    ON DELETE NO ACTION;
 
ALTER TABLE Have_Singer_Music_Album ADD CONSTRAINT FK_Have_Singer_Music_Album_2
    FOREIGN KEY (fk_Music_ID_music)
    REFERENCES Music (ID_music)
    ON DELETE NO ACTION;
 
ALTER TABLE Have_Singer_Music_Album ADD CONSTRAINT FK_Have_Singer_Music_Album_3
    FOREIGN KEY (fk_Album_ID_Album)
    REFERENCES Album (ID_Album)
    ON DELETE NO ACTION;
 
ALTER TABLE Listen_Music_USer ADD CONSTRAINT FK_Listen_Music_USer_1
    FOREIGN KEY (fk_Music_ID_music)
    REFERENCES Music (ID_music)
    ON DELETE RESTRICT;
 
ALTER TABLE Listen_Music_USer ADD CONSTRAINT FK_Listen_Music_USer_2
    FOREIGN KEY (fk_User_ID_user)
    REFERENCES User (ID_user)
    ON DELETE RESTRICT;