import pandas as pd
import statsmodels.api as sm

# Importez vos données à partir d'un fichier Excel
donnees = pd.read_excel(r"C:\Users\ARMIDE Informatique\Desktop\Projet Académique\BD zone CFA.xlsx")

# Spécifiez les variables indépendantes (X) et dépendante (Y)
X = donnees[['XAF']]
Y = donnees['IDE']

#Ajouter la constante à la variable dépendante
x = sm.add_constant(X)

# Créez un modèle de régression linéaire
modele_regression = sm.OLS(Y, X).fit()

#Afficher les résulats
print(models.summary())
# Entraînez le modèle sur l'ensemble complet de données
modele_regression.fit(X, Y)

# Affichez les coefficients du modèle
print("Coefficient (pente) : ", modele_regression.coef_)
print("Intercept (ordonnée à l'origine) : ", modele_regression.intercept_)
