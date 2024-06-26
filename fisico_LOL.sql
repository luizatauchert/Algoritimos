/* Lógico_LOL: */

CREATE TABLE Player (
    ID_player Number PRIMARY KEY,
    User_name Varchar,
    Level Number,
    Score Number,
    Region Varchar
);

CREATE TABLE Champion (
    ID_champion Number PRIMARY KEY,
    Name Varchar,
    Function Varchar,
    Damage_type Varchar,
    Skils Varchar
);

CREATE TABLE Match_game (
    ID_match Number PRIMARY KEY,
    Data_hour Date,
    Duration Number,
    Result Number,
    fk_Champion_ID_champion Number
);

CREATE TABLE Team (
    ID_team Number PRIMARY KEY,
    Name_team Varchar,
    fk_Match_game_ID_match Number
);

CREATE TABLE Item (
    ID_item Number PRIMARY KEY,
    Name Varchar,
    Description Varchar,
    Cost Number,
    Effect Varchar
);

CREATE TABLE Offensive_item (
    Physical_damage Number,
    Magic_damage Number
);

CREATE TABLE Consumable_item (
    Totem Number,
    Potion Number
);

CREATE TABLE Defensive_item (
    Armor Number,
    Magic_resistance Number
);

CREATE TABLE Player_team_match_Pontuaction_Player_Team_Match_game (
    Solo Varchar,
    Team Varchar,
    fk_Player_ID_player Number,
    fk_Team_ID_team Number,
    fk_Match_game_ID_match Number
);

CREATE TABLE Have (
    fk_Player_ID_player Number,
    fk_Team_ID_team Number
);

CREATE TABLE Have (
    fk_Player_ID_player Number
);
 
ALTER TABLE Match_game ADD CONSTRAINT FK_Match_game_2
    FOREIGN KEY (fk_Champion_ID_champion)
    REFERENCES Champion (ID_champion)
    ON DELETE RESTRICT;
 
ALTER TABLE Team ADD CONSTRAINT FK_Team_2
    FOREIGN KEY (fk_Match_game_ID_match)
    REFERENCES Match_game (ID_match)
    ON DELETE RESTRICT;
 
ALTER TABLE Player_team_match_Pontuaction_Player_Team_Match_game ADD CONSTRAINT FK_Player_team_match_Pontuaction_Player_Team_Match_game_1
    FOREIGN KEY (fk_Player_ID_player)
    REFERENCES Player (ID_player);
 
ALTER TABLE Player_team_match_Pontuaction_Player_Team_Match_game ADD CONSTRAINT FK_Player_team_match_Pontuaction_Player_Team_Match_game_2
    FOREIGN KEY (fk_Team_ID_team)
    REFERENCES Team (ID_team);
 
ALTER TABLE Player_team_match_Pontuaction_Player_Team_Match_game ADD CONSTRAINT FK_Player_team_match_Pontuaction_Player_Team_Match_game_3
    FOREIGN KEY (fk_Match_game_ID_match)
    REFERENCES Match_game (ID_match);
 
ALTER TABLE Have ADD CONSTRAINT FK_Have_1
    FOREIGN KEY (fk_Player_ID_player)
    REFERENCES Player (ID_player)
    ON DELETE RESTRICT;
 
ALTER TABLE Have ADD CONSTRAINT FK_Have_2
    FOREIGN KEY (fk_Team_ID_team)
    REFERENCES Team (ID_team)
    ON DELETE RESTRICT;
 
ALTER TABLE Have ADD CONSTRAINT FK_Have_1
    FOREIGN KEY (fk_Player_ID_player)
    REFERENCES Player (ID_player)
    ON DELETE RESTRICT;