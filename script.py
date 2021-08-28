
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os
import sys
import requests

options = webdriver.ChromeOptions()
options.add_argument("--disable-infobars")
# options.add_argument("--headless")
# Uncoment to enable Headless version
options.add_argument("--start-maximized")
options.add_argument(
    "user-agent='User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'"
)
def main():
    pincode = [str(sys.argv[1])]

    while True:
        browser = webdriver.Chrome(options=options)

        for pin in pincode:
            browser.get("https://www.cowin.gov.in/")
            browser.implicitly_wait(10)
            browser.find_element_by_id('mat-input-0').send_keys(pin)
            browser.implicitly_wait(10)
            time.sleep(10)
            browser.find_element_by_xpath(
                "//*[@id=\"mat-tab-content-0-0\"]/div/div[1]/div/div/button").click()
            time.sleep(10)
            browser.find_element_by_xpath(
                "//*[@id=\"Search-Vaccination-Center\"]/appointment-table/div/div/div/div/div/div/div/div/div/div/div[2]/form/div/div/div[2]/div[3]/ul/li[2]/div/div[2]/label").click()
            time.sleep(10)

            browser.find_element_by_xpath(
                    "//*[@id=\"Search-Vaccination-Center\"]/appointment-table/div/div/div/div/div/div/div/div/div/div/div[2]/form/div/div/div[5]/div[3]/div/div/div[1]/p")
                # No slots
   

    response = requests.get(
        
    )
    response.raise_for_status()
    centers = {}
    result = response.json()
    for i in result["centers"]:
        centers[i["center_id"]] = i
    count = 0

    flag = False
    for id, center in centers.items():
        flag1 = False
        sessions = center["sessions"]
        for session in sessions:
            if session['min_age_limit'] < 45:
                if flag1 == False:
                    print(
                        f"{center['state_name']}, {center['district_name']}, {center['name']}, from: {center['from']}, to: {center['to']}, fee_type: {center['fee_type']}")
                    flag1 = True
                flag = True
                if session['available_capacity'] > 0:
                    count += 1
                print(f"{session['date']}, capacity: {session['available_capacity']}, age limit: {session['min_age_limit']}, vaccine: {session['vaccine']}, slots: {session['slots']}")
                print('````````````````````````````````````````')
    if flag == False:
        print("No vaccines available!")
    else:
        print(f"{count} sessions available.")
        
             
            
        print("Vaccine Not Available. Checing Again in 5 mins.")
        time.sleep(300)

