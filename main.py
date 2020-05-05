#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""创建json文件"""

__author__ = 'three thousand'

import pymysql
import json
import math
import os

db = pymysql.connect("localhost", "site", "sitemysqlpossward", "siteapi.com")
cursor = db.cursor()

def main():
    data = queryDb("SELECT `id`, `src`, `title`, `read`, `like`, DATE_FORMAT(`create_ad`,'%Y-%m-%d') as `created_ad` FROM site ORDER BY `uq` DESC")
    createJson("content/db.json", data)
    data = queryDb("SELECT `id`, `src`, `title`, `read`, `like`, DATE_FORMAT(`create_ad`,'%Y-%m-%d') as `created_ad` FROM site ORDER BY `like` DESC LIMIT 10")
    createJson("content/like.json", data)
    data = queryDb("SELECT `id`, `src`, `title`, `read`, `like`, DATE_FORMAT(`create_ad`,'%Y-%m-%d') as `created_ad` FROM site ORDER BY `read` DESC LIMIT 10")
    createJson("content/read.json", data)

def queryDb(sql):
    cursor.execute(sql)
    data = cursor.fetchall()
    return data

def createJson(dir, data):
    items = list(map(lambda x: {"id":x[0], "src":x[1], "title": x[2], "read": x[3], "like": x[4], "date": x[5]}, data))
    with open(dir, 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False)

if __name__ == "__main__":
    main()
    db.close()