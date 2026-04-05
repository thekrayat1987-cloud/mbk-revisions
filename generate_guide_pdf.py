#!/usr/bin/env python3
"""Generate PDF guide for updating the MBK Revisions site."""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT

output_path = "/Users/thekrayathusain/Site pour Revisions/Guide_MBK_Revisions.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    rightMargin=2*cm,
    leftMargin=2*cm,
    topMargin=2*cm,
    bottomMargin=2*cm
)

# ── Styles ──────────────────────────────────────────────
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'Title', parent=styles['Normal'],
    fontSize=22, textColor=colors.HexColor('#6c3fa0'),
    alignment=TA_CENTER, spaceAfter=6, fontName='Helvetica-Bold'
)
subtitle_style = ParagraphStyle(
    'Subtitle', parent=styles['Normal'],
    fontSize=12, textColor=colors.HexColor('#888888'),
    alignment=TA_CENTER, spaceAfter=20
)
heading_style = ParagraphStyle(
    'Heading', parent=styles['Normal'],
    fontSize=14, textColor=colors.white,
    fontName='Helvetica-Bold', spaceAfter=6, spaceBefore=16,
    leftIndent=0
)
step_style = ParagraphStyle(
    'Step', parent=styles['Normal'],
    fontSize=12, textColor=colors.HexColor('#6c3fa0'),
    fontName='Helvetica-Bold', spaceAfter=4, spaceBefore=10
)
body_style = ParagraphStyle(
    'Body', parent=styles['Normal'],
    fontSize=11, textColor=colors.HexColor('#333333'),
    spaceAfter=4, leading=16
)
code_style = ParagraphStyle(
    'Code', parent=styles['Normal'],
    fontSize=10, fontName='Courier',
    textColor=colors.HexColor('#2d2d2d'),
    backColor=colors.HexColor('#f4f0ff'),
    borderPadding=(6, 10, 6, 10),
    spaceAfter=4, leading=16
)
note_style = ParagraphStyle(
    'Note', parent=styles['Normal'],
    fontSize=10, textColor=colors.HexColor('#555555'),
    backColor=colors.HexColor('#fff8e1'),
    borderPadding=(6, 10, 6, 10),
    spaceAfter=8, leading=15
)
footer_style = ParagraphStyle(
    'Footer', parent=styles['Normal'],
    fontSize=9, textColor=colors.HexColor('#aaaaaa'),
    alignment=TA_CENTER
)

def section_header(text, color='#6c3fa0'):
    """Colored section header as a table."""
    data = [[Paragraph(text, heading_style)]]
    t = Table(data, colWidths=[17*cm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor(color)),
        ('ROUNDEDCORNERS', [6,6,6,6]),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 14),
    ]))
    return t

def code_block(text):
    lines = text.strip().split('\n')
    result = []
    for line in lines:
        result.append(Paragraph(line, code_style))
    return result

# ── Content ──────────────────────────────────────────────
story = []

# Header banner
banner_data = [[Paragraph('Guide : Mettre à jour votre site MBK Révisions', title_style)]]
banner = Table(banner_data, colWidths=[17*cm])
banner.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f3eeff')),
    ('TOPPADDING', (0,0), (-1,-1), 20),
    ('BOTTOMPADDING', (0,0), (-1,-1), 10),
    ('ROUNDEDCORNERS', [10,10,10,10]),
]))
story.append(banner)
story.append(Spacer(1, 6))
story.append(Paragraph('Site : https://thekrayat1987-cloud.github.io/mbk-revisions/', subtitle_style))
story.append(HRFlowable(width='100%', thickness=1, color=colors.HexColor('#e0d0ff'), spaceAfter=16))

# ── Section 1 ──
story.append(section_header('📝  Étape 1 — Modifier le fichier sur votre Mac'))
story.append(Spacer(1, 8))
story.append(Paragraph('Ouvrez le fichier à modifier :', body_style))
story.append(Paragraph('• <b>MBK_Revisions.html</b> — pour le contenu du site (vocab, grammaire, exercices...)', body_style))
story.append(Paragraph('• <b>index.html</b> — pour la page d\'accueil', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('📁 Dossier : <b>/Users/thekrayathusain/Site pour Revisions/</b>', body_style))

# ── Section 2 ──
story.append(Spacer(1, 10))
story.append(section_header('💻  Étape 2 — Envoyer les changements sur GitHub', '#4a90d9'))
story.append(Spacer(1, 8))
story.append(Paragraph('Ouvrez le <b>Terminal</b> et tapez ces 4 commandes :', body_style))
story.append(Spacer(1, 4))

story.append(Paragraph('1. Aller dans le bon dossier :', step_style))
story += code_block('cd "/Users/thekrayathusain/Site pour Revisions"')

story.append(Paragraph('2. Préparer les fichiers modifiés :', step_style))
story += code_block('git add .')

story.append(Paragraph('3. Enregistrer les changements :', step_style))
story += code_block('git commit -m "mise a jour"')

story.append(Paragraph('4. Envoyer sur GitHub :', step_style))
story += code_block('git push')

# ── Section 3 ──
story.append(Spacer(1, 10))
story.append(section_header('⏳  Étape 3 — Attendre la mise à jour', '#27ae60'))
story.append(Spacer(1, 8))
story.append(Paragraph('Après le <b>git push</b>, GitHub Pages se met à jour automatiquement en <b>2 à 3 minutes</b>.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('Actualisez votre site dans le navigateur avec <b>Cmd + Shift + R</b> pour voir les changements.', body_style))

# ── Résumé ──
story.append(Spacer(1, 16))
story.append(HRFlowable(width='100%', thickness=1, color=colors.HexColor('#e0d0ff'), spaceBefore=4, spaceAfter=12))

summary_data = [
    ['Commande', 'Action'],
    ['cd "/Users/thekrayathusain/Site pour Revisions"', 'Ouvrir le bon dossier'],
    ['git add .', 'Préparer tous les fichiers modifiés'],
    ['git commit -m "mise a jour"', 'Sauvegarder les changements'],
    ['git push', 'Envoyer sur GitHub (site mis à jour)'],
]
summary_table = Table(summary_data, colWidths=[9*cm, 8*cm])
summary_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#6c3fa0')),
    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
    ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
    ('FONTSIZE', (0,0), (-1,-1), 9),
    ('FONTNAME', (0,1), (0,-1), 'Courier'),
    ('BACKGROUND', (0,1), (-1,-1), colors.HexColor('#f9f6ff')),
    ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor('#f9f6ff'), colors.HexColor('#ede8ff')]),
    ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#d0c0f0')),
    ('TOPPADDING', (0,0), (-1,-1), 7),
    ('BOTTOMPADDING', (0,0), (-1,-1), 7),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('ALIGN', (0,0), (-1,-1), 'LEFT'),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(summary_table)

# ── Note importante ──
story.append(Spacer(1, 14))
story.append(Paragraph('💡  Note importante : La clé SSH est déjà configurée sur votre Mac. Le git push fonctionnera directement sans mot de passe.', note_style))

# ── Footer ──
story.append(Spacer(1, 20))
story.append(Paragraph('MBK Révisions — Madame Zkrayat © 2026', footer_style))

# ── Build ──
doc.build(story)
print(f"PDF généré : {output_path}")
