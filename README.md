Recommendation scoring Logic- (TOTAL POSSIBLE SCORE - 30 )

1. 5 points if vendor city matched with work requirement city
2. 5 points if vendor state matched with work requirement state
3. Vendor type scoring -  
   5 points if vendor type is self performing (all work will be done by vendor completely)  
   3 points if vendor type is hybrid (half work will be done by vendor na half by outsourcing )
   0 points if vendor type is outsourcing (all work will be outsourced - low reliability)
4. Out of 5 Vendor Documents (add the number of documents possessed by Vendor - Meaning 3 points if he has 3 documents and so on)

5. Rating added as it is (out of 5)

6. Priority scoring -
   if work is priority - 5 points if vendor can start work in 10 days (leadTimeInDays <= 10)
   4 points if vendor can start work in 20 days (leadTimeInDays <= 20)
   3 points if vendor can start work in 30 days (leadTimeInDays <= 30)
   2 points if vendor can start work in 60 days (leadTimeInDays <= 60)
   1 points if vendor can start work in 80 days (leadTimeInDays <= 80)
   else 0 points

   if work is not priority - 5 points (to balance scoring)

Recommendation Listings- Top 5 recommendations will be listed based on descending order of above calculated score

Assumptions -

1. city entered during vendor creation and work creation has correct spelling (casing will have no affect)

API -

1. Create vendor - http://localhost:3001/vendor (POST)
   payload-
   {
   "name": "Delhi Builders Pvt. Ltd.",
   "email": "contact@delhibuilders.com",
   "phoneNo": "9876543210",
   "rating": 4.8,
   "status": "inactive" | "active",
   "category": construction'| 'food'| 'software'| 'clothing'
   "city": "Delhi",
   "state": "Delhi" ,
   "leadTimeInDays": 60,
   "type": "Self Performing" | "Outsourcing" | "Hybrid"
   }

   leadTimeInDays - number of days in which vendor can begin work

2.Create work - http://localhost:3001/work (POST)
payload -

    {

"title": "Office Building Construction",
"category": "construction", (same as vendor category)
"estimatedValue": 25000000,
"city": "Noida",
"state":"Uttar Pradesh",
"priority": true,
"expectedStartDate": "2026-08-01T09:00:00.000Z"
}

3 - Create Vendor Doc - http://localhost:3001/vendor-doc (POST)
payload - {
"type": "Tax Registration"| "Insurance"| "Trade License"| "Safety Certificate"| "Agreement",
"vendorId":"55c96ddd-88a2-42ba-82f2-177404c926d6"
}

4 - Get Recommendations for work - http://localhost:3001/work/workId/recommendations (GET)

ENVIRONmET VARIABLES-
PORT=3001
DB_URI= 'postgresql://postgres:qwerty123@localhost:5432/fieldnerve'

(create a local postgres database by the name of "fieldnerve")

STARTING APPLICATION

npm run start
