import requests
import sys

# Edit below details
pin_code = str(sys.argv[1])  # Enter your pin code
# Enter tomorrow's date it'll find next 7 days information. Simply use a later date to find more slots.
date = "26-08-2021"
# Optional use https://cdn-api.co-vin.in/api/v2/admin/location/districts/32 and https://cdn-api.co-vin.in/api/v2/admin/location/states


## No more edits

url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin"


try:
    my_params = {'pincode': pin_code, 'date': date}

    response = requests.get(
        url,
        params=my_params,
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
except requests.exceptions.HTTPError as err:
    raise SystemExit(err)
