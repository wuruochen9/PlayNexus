CREATE TRIGGER HistoryTrig
AFTER INSERT ON viewedgames
FOR EACH ROW
BEGIN
    SET @count_history=(select count(GameID) from viewedgames where UserID=new.UserID);
    IF @count_history>50 THEN
        DELETE FROM viewedgames
        WHERE UserID=new.UserID
        ORDER BY `Timestamp` LIMIT 1;
    END IF;
END;