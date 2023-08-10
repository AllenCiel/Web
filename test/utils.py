import time
import pymysql

def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年", "月", "日")


# 连接数据库
def get_conn():
    # 创建连接
    conn = pymysql.connect(
        host='127.0.0.1',
        user='root',
        password='',
        db='cov',
        charset='utf8'
    )
    # 创建游标
    cursor = conn.cursor() # 执行完毕返回的结果默认以元组显示
    return conn, cursor

# 关闭连接
def close_conn(conn, cursor):
    cursor.close()
    conn.close()

# 封装通用查询
def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res #元组的形式


def get_t2_data():
    sql = 'select sum(confirm),' \
            '(select suspect from history order by ds desc limit 1),' \
            'sum(heal) ' \
            'from details ' \
            'where update_time=(select update_time from details order by update_time desc limit 1) '
    res = query(sql)
    return res[0]

def get_t8_data():
    sql = 'select ds,confirm,heal from history'
    res = query(sql)
    return res

def get_t7_data():
    sql = 'select confirm,heal from details ' \
          'where update_time=(select update_time from details order by update_time desc limit 1) '
    res = query(sql)
    return res[0]

if __name__ == "__main__":
    print(get_t8_data())
    # get_conn()
    # close_conn()
