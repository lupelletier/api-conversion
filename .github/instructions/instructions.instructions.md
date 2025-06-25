---
applyTo: "**"
---

Coding standards, domain knowledge, and preferences that AI should follow.

# Instructions for AI

Cahier des charges client — Microservice de conversion et
calculs
Contexte
Notre entreprise souhaite disposer d’un petit service web permettant d’effectuer des
conversions et des calculs financiers simples, utilisés par plusieurs outils internes.
Objectifs
Fournir une API REST exposant :
✅ Conversions de devises
• Conversion EUR ↔ USD
• Conversion USD ↔ GBP
✅ Calculs financiers
• Calcul d’un montant TTC à partir d’un montant HT et d’un taux de TVA
• Application d’une remise sur un prix donné
Spécifications fonctionnelles
👉 Routes attendues :
Méthod
e
Route Description
GET /convert?from=EUR&to=USD&amount=100 Retourne la conversion du
montant
GET /tva?ht=100&taux=20 Retourne le montant TTC
GET /remise?prix=100&pourcentage=10 Retourne le prix après remise
👉 Réponses attendues (exemples)
// /convert?from=EUR&to=USD&amount=100
{
"from": "EUR",
"to": "USD",
"originalAmount": 100,
"convertedAmount": 110
}
// /tva?ht=100&taux=20
{
"ht": 100,
"taux": 20,
"ttc": 120
}
// /remise?prix=100&pourcentage=10
{
"prixInitial": 100,
"pourcentage": 10,
"prixFinal": 90
}
👉 Taux de conversion (fixes pour l’exercice)
• 1 EUR = 1.1 USD
• 1 USD = 0.8 GBP
Contraintes techniques
⚙ Tests attendus
• Unitaires : fonctions de calcul (conversion, TVA, remise)
• Fonctionnels : les routes (vérification des codes retour, réponse JSON correcte)
• Intégration : communication entre le service qui récupère le taux de change et une
fausse API, faire un Mock de cette API.
• E2E : scénario complet (ex : convertir un prix puis calculer la TVA du montant
converti)
⚙ Pipeline CI attendu
• Exécution des tests unitaires + fonctionnels + E2E
• Génération d’un rapport de couverture
• Échec du pipeline si couverture < 80 %
⚙ Livrables attendus
• Code source complet
• Fichier de configuration du pipeline CI (GitLab CI, GitHub Actions ou autre)
Points de vigilance
❗ Les conversions doivent respecter les taux fixés (ne pas utiliser d’API externe).
❗ Vérifier les entrées (par ex : pas de montant négatif).
Livrables
📂 Code source + README
📂 Fichier de CI
Inspection
❗ Votre projet sera transmis à un autre développeur qui tentera d’en casser le
fonctionnement sans faire échouer les tests. Vérifiez bien votre couverture de tests avec
jest --coverage.
