import pandas as pd
import random
from datetime import datetime, timedelta

# Liste des cryptomonnaies
cryptos = ['Bitcoin','Cardano', 'Ethereum', 'Solana', 'Dogecoin']

# Générer les dates hebdomadaires et mensuelles entre 2023 et 2024
start_date = datetime(2020, 1, 1)
end_date = datetime(2025, 4, 1)

dates = []
current_date = start_date

while current_date <= end_date:
    dates.append(current_date.strftime("%Y-%m-%d"))
    current_date += timedelta(weeks=1)  # Ajoute une semaine

    # Ajoute une date mensuelle après chaque semaine (environ)
    if len(dates) % 4 == 0:
        month_date = current_date.replace(day=1)  # Premier jour du mois
        if month_date.strftime("%Y-%m-%d") not in dates:  # Évite les doublons
            dates.append(month_date.strftime("%Y-%m-%d"))

# Limiter à 100 dates
dates = dates[:100]

# Générer des fichiers CSV pour chaque cryptomonnaie
for crypto in cryptos:
    prices = [round(random.uniform(0.1, 5000), 2) for _ in dates]  # Prix aléatoires
    df = pd.DataFrame({"Date": dates, f"{crypto} Price": prices})
    df.to_csv(f"{crypto.lower()}_prices.csv", index=False)
