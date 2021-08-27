from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "C:\Program Files (x86)\chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("https://www.cowin.gov.in/")


searchBar = driver.find_element_by_id('mat-input-0')
searchBar.send_keys('110001')
searchBar.send_keys(Keys.RETURN)


try:
    centers= WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(
            (By.XPATH, "/html/body/app-root/div/app-home/div[3]/div/appointment-table/div/div/div/div/div/div/div/div/div/div/div[2]/form/div/div/div[4]/div[3]/div[1]/div/div/div/a/div[1]/div[1]"))
    )
    print(centers.text)
except:
    driver.quit()




time.sleep(10)

driver.quit
