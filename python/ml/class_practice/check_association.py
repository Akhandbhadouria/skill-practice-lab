import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori,association_rules

transactions=[]
try:
    with open("dataset/groceries (1).csv","r") as f:
        for line in f:
            items=line.strip().split(",")
            transactions.append(items)
    
    print(f"Loaded {len(transactions)} transactions.")
    
    te=TransactionEncoder()
    te_array=te.fit(transactions).transform(transactions)
    df=pd.DataFrame(te_array,columns=te.columns_)
    print("DataFrame created successfully.")
    print(df.head())
except Exception as e:
    print(f"Error: {e}")
