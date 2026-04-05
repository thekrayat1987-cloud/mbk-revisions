#!/usr/bin/env python3
"""Generate MP3 audio files using Microsoft Edge Neural TTS (fr-FR-DeniseNeural)."""
import asyncio
import os
import edge_tts

os.makedirs('audio', exist_ok=True)

VOICE = "fr-FR-DeniseNeural"

dialogues = {
    'd5': (
        "Jean-Pierre : Voilà les amis koweïtiens. "
        "Hassan et Mona : Bonjour Monsieur, salut Jean-Pierre, ça va Brigitte ? "
        "Brigitte : Ça va très bien, merci. Vous êtes fatigués ? "
        "Hassan : Non, nous ne sommes pas fatigués, le voyage était agréable. "
        "Monsieur Martin : Venez, la voiture est dans le parking. "
        "Mona : Vous habitez loin d'ici ? "
        "Brigitte : Non, notre maison est proche. Elle est à 5 kilomètres de Paris. "
        "Mona : Il fait un temps superbe. "
        "Brigitte : Et au Koweït, quel temps fait-il maintenant ? "
        "Hassan : Il fait chaud, la température dépasse les 45 degrés. "
        "Jean-Pierre : Ah non, c'est trop ! "
        "Madame Martin : Bonjour, bienvenue en France. Entrez ! "
        "Hassan : Merci Madame, heureux de vous rencontrer. "
        "Brigitte : Venez, je vais vous montrer la maison. Voici le salon, la cuisine et la salle à manger. "
        "Mona : Où est ta chambre, Brigitte ? "
        "Brigitte : Elle est au premier étage. Allons-y. "
        "Brigitte : À gauche, c'est la chambre de Jérôme. Et à droite, c'est la chambre de nos parents. "
        "Hassan : Et toi, tu n'as pas de chambre Jean-Pierre ? "
        "Jean-Pierre : Si, c'est en haut. J'ai mon petit studio au deuxième étage."
    ),
    'd6': (
        "Mona : Que c'est grand ! Elle est plus grande que les tours du Koweït. "
        "Jean-Pierre : Si vous voulez, on peut monter au premier étage ? "
        "Brigitte : Non, au dernier. D'en haut la vue est magnifique pour prendre des photos. "
        "Hassan : C'est une bonne idée ! "
        "Jean-Pierre : Je vais acheter les billets, tu viens Hassan ? "
        "Hassan : D'accord... Quelle longue queue ! "
        "Brigitte : Oui, c'est normal, on est devant le monument le plus visité du monde. "
        "Mona : C'est très haut ! La vue est superbe. "
        "Monsieur Martin : Regardez là-bas à gauche, c'est l'Arc de Triomphe, il est au bout de la fameuse avenue des Champs-Élysées. "
        "Jean-Pierre : Hassan, viens voir les Invalides, à droite. "
        "Hassan : Ces bâtiments sont très anciens, n'est-ce pas ? "
        "Jean-Pierre : Oui, admire aussi la Seine et les bateaux-mouches ! "
        "Brigitte : Alors, comment vous trouvez ce paysage ? "
        "Hassan et Mona : C'est vraiment merveilleux !"
    ),
    'd7': (
        "La serveuse : Bonsoir vous êtes combien ? "
        "Jean-Pierre : Bonsoir, nous sommes quatre. "
        "La serveuse : Venez, il y a une table libre là-bas, juste à côté de la fenêtre. Asseyez-vous ! Je peux prendre votre commande ? "
        "Jean-Pierre : Ici, les plats sont toujours bons. Vous voulez quoi ? "
        "Brigitte : Tu prends quoi Mona ? Je te conseille le poulet au citron. C'est extra ! "
        "Mona : Ça a l'air bon : du poulet et de la salade verte. "
        "Hassan : Moi, je préfère prendre un steak et des frites. "
        "Jean-Pierre : Moi aussi, la même chose. "
        "La serveuse : Et comme boisson ? "
        "Mona : Pour nous, une bouteille d'eau, et deux jus d'orange pour les garçons. "
        "La serveuse : Vous prenez un dessert ? "
        "Mona : Oui, j'aimerais prendre un gâteau au chocolat et un café noir. "
        "Hassan : Moi, je voudrais une tarte aux fraises avec une tasse de thé, s'il vous plaît. "
        "La serveuse : Voilà ! Bon appétit. "
        "Hassan : C'était vraiment bon. "
        "Mona : Tu as raison, c'était délicieux ! "
        "Jean-Pierre : Madame ! L'addition s'il vous plaît !"
    ),
    'd8': (
        "La vendeuse : Bonjour madame, je peux vous aider ? "
        "Mona : Je cherche une jupe en coton, s'il vous plaît ! "
        "La vendeuse : J'ai plusieurs modèles, que préférez-vous ? "
        "Mona : Ce modèle me plaît. "
        "La vendeuse : Vous faites quelle taille ? "
        "Mona : Je mets du 38. "
        "La vendeuse : Voilà, j'ai ce modèle en bleu marine et en rose. "
        "Mona : J'aime bien la jupe rose. J'adore cette couleur. "
        "La vendeuse : Oui, vous avez raison, vous pouvez l'essayer. "
        "Mona : Elle est confortable et à la mode. "
        "La vendeuse : Elle vous va bien cette jupe. Elle est de très bonne qualité et chic. Vous voulez autre chose ? "
        "Mona : Oui, il me faut un foulard en soie pour maman. "
        "La vendeuse : Les foulards sont au rez-de-chaussée, à côté du rayon parfumerie. "
        "Mona : D'accord, quel est le prix ? "
        "La vendeuse : Ça coûte 50 euros. Vous pouvez payer vos achats en bas. "
        "Mona : Merci madame. "
        "La vendeuse : À votre service, bonne journée."
    ),
    'd4t': (
        "Mona : Maman, Hassan va avoir 19 ans bientôt. Que penses-tu faire ? "
        "Madame Mansour : Moi, je pense préparer un bon gâteau au chocolat pour la fête. "
        "Mona : Je pense que tu as raison. Quant à moi, je vais envoyer des invitations. "
        "Madame Mansour : C'est une bonne idée ! "
        "Monsieur Mansour : Moi, je vais apporter des boissons fraîches et je vais acheter les décorations et les guirlandes. "
        "Mona : C'est génial ! Et les cousins vont apporter des cadeaux. "
        "Monsieur Mansour : D'accord ! Je vais au supermarché maintenant. À tout à l'heure !"
    ),
    'd5t': (
        "Le docteur : Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ? "
        "Hassan : Depuis hier soir, j'ai mal à la tête, je tousse beaucoup, je crois que j'ai un peu de fièvre. "
        "Le docteur : Bon, je vais vous examiner. D'abord, je prends votre température et je vérifie votre tension. Ouvrez la bouche, toussez, respirez... Votre température est élevée et vous avez de la fièvre. Vous avez mal à la gorge ? "
        "Hassan : Oui, j'ai mal à la gorge quand je tousse. "
        "Le docteur : Alors, vous avez une angine. Je vais vous prescrire des médicaments. Vous devez vous reposer et boire beaucoup d'eau. "
        "Hassan : Est-ce que je peux travailler demain ? "
        "Le docteur : Non, je vous conseille de rester au lit deux ou trois jours. "
        "Hassan : Oui docteur, je pense que vous avez raison. "
        "Le docteur : Voici votre ordonnance : des comprimés après les repas, des gouttes dans le nez quand il est bouché, et ne prenez jamais de boissons froides ! "
        "Hassan : Oui, je vous remercie. Au revoir docteur."
    ),
    'd6t': (
        "Hassan : Je suis vraiment énervé, tout va mal : le studio est trop petit, il n'y a pas d'ascenseur. Le chauffage est toujours en panne et je ne peux pas travailler à cause du bruit. C'est insupportable ! "
        "Jean-Pierre : Écoute ! J'ai trouvé l'appartement que tu souhaites dans une annonce en ligne. Je vais contacter l'agence immobilière pour aller visiter l'appartement. "
        "Hassan : C'est bien calme, lumineux, au centre-ville et près de l'université. Mais l'appartement est vide. Je dois acheter des meubles. "
        "Jean-Pierre : Tu as raison ! Tu pourrais mettre un lit ici, et tu vas ranger tes vêtements dans le placard à côté. "
        "Hassan : On pourrait mettre un canapé ou des chaises là-bas. "
        "Jean-Pierre : Il y aurait une lampe sur une table basse au fond. "
        "Hassan : Où est-ce que je peux travailler ? "
        "Jean-Pierre : Tu pourrais travailler ou manger sur une table que tu mettras devant cette fenêtre. "
        "Hassan : Derrière, ce serait une étagère pour les livres. "
        "Jean-Pierre : Et devant ce mur, c'est possible d'avoir un miroir pour se regarder. Voilà la cuisine. Comment tu la trouves ? "
        "Hassan : C'est très simple et bien équipée. Tu es gentil. Maintenant, je pourrais travailler mieux et en sécurité."
    ),
}

async def generate_one(did, text):
    path = f'audio/{did}.mp3'
    print(f'  {did}.mp3 ...', end=' ', flush=True)
    communicate = edge_tts.Communicate(text, VOICE, rate='-5%')
    await communicate.save(path)
    print('OK')

async def main():
    print(f'Voice: {VOICE}\n')
    tasks = [generate_one(did, text) for did, text in dialogues.items()]
    await asyncio.gather(*tasks)
    print('\nDone!')

asyncio.run(main())
