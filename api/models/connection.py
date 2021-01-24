import pymysql
class Connection:
    def __init__( self, localhost, user, password, database ):
        try:
            self.__conn = pymysql.connect(host=localhost, user = user, password = password, database = database)
            self.__cur = self.__conn.cursor()
        except Exception as err:
            print(err.__str__())
    