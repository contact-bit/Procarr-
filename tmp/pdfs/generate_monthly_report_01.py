from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = "/Users/hdconnects/Procarr-/output/pdf/plan-intervention-procarre-juillet-2026.pdf"

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
MARGIN_TOP = 17 * mm
MARGIN_BOTTOM = 16 * mm

RED = HexColor("#E63932")
DARK = HexColor("#17171A")
MUTED = HexColor("#66666E")
LIGHT = HexColor("#F4F4F5")
LINE = HexColor("#DEDEE3")
WHITE = HexColor("#FFFFFF")
GREEN = HexColor("#18794E")


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Eyebrow",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    textColor=RED,
    spaceAfter=3 * mm,
    uppercase=True,
))
styles.add(ParagraphStyle(
    name="ReportTitle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=25,
    textColor=DARK,
    alignment=TA_LEFT,
    spaceAfter=2.5 * mm,
))
styles.add(ParagraphStyle(
    name="Subtitle",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=10.5,
    leading=15,
    textColor=MUTED,
    spaceAfter=6 * mm,
))
styles.add(ParagraphStyle(
    name="Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=15,
    textColor=DARK,
    spaceBefore=1.5 * mm,
    spaceAfter=2.5 * mm,
))
styles.add(ParagraphStyle(
    name="BodySmall",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.2,
    leading=13,
    textColor=DARK,
    spaceAfter=2 * mm,
))
styles.add(ParagraphStyle(
    name="BulletSmall",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=9.1,
    leading=12.5,
    leftIndent=4 * mm,
    firstLineIndent=-3.2 * mm,
    bulletIndent=0,
    textColor=DARK,
    spaceAfter=1.5 * mm,
))
styles.add(ParagraphStyle(
    name="CardTitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.3,
    leading=12,
    textColor=DARK,
    spaceAfter=1.5 * mm,
))
styles.add(ParagraphStyle(
    name="CardText",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.6,
    leading=12,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="Badge",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.5,
    leading=11,
    textColor=GREEN,
    alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="Footer",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.5,
    leading=9,
    textColor=MUTED,
    alignment=TA_CENTER,
))


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(RED)
    canvas.rect(0, PAGE_H - 4 * mm, PAGE_W, 4 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.line(MARGIN_X, 12 * mm, PAGE_W - MARGIN_X, 12 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN_X, 7.5 * mm, "Procarré.fr - Plan de maintenance mensuelle")
    canvas.drawRightString(PAGE_W - MARGIN_X, 7.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=MARGIN_X,
    rightMargin=MARGIN_X,
    topMargin=MARGIN_TOP,
    bottomMargin=MARGIN_BOTTOM,
    title="Plan d'intervention mensuel n°1 - Procarré.fr",
    author="Maintenance technique Procarré.fr",
    subject="Programme de maintenance prévu en juillet 2026",
)
frame = Frame(
    MARGIN_X,
    MARGIN_BOTTOM,
    PAGE_W - 2 * MARGIN_X,
    PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
    id="main",
)
doc.addPageTemplates([PageTemplate(id="report", frames=[frame], onPage=header_footer)])

story = []
story.append(Paragraph("PLAN D'INTERVENTION N°1 • JUILLET 2026", styles["Eyebrow"]))
story.append(Paragraph("Maintenance et amélioration de Procarré.fr", styles["ReportTitle"]))
story.append(Paragraph(
    "Programme des actions prévues dans le cadre du forfait mensuel d'évolution et de suivi du site.",
    styles["Subtitle"],
))

meta = Table([
    [
        Paragraph("<b>Site</b><br/>procarre.fr", styles["CardText"]),
        Paragraph("<b>Période</b><br/>Juillet 2026", styles["CardText"]),
        Paragraph("<b>Statut</b><br/><font color='#18794E'>Intervention planifiée</font>", styles["CardText"]),
    ]
], colWidths=[55 * mm, 55 * mm, 55 * mm])
meta.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
    ("BOX", (0, 0), (-1, -1), 0.6, LINE),
    ("INNERGRID", (0, 0), (-1, -1), 0.6, LINE),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 3.2 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3.2 * mm),
]))
story.append(meta)
story.append(Spacer(1, 5 * mm))

story.append(Paragraph("Objectif de l'intervention", styles["Section"]))
story.append(Paragraph(
    "Faire progresser le site de manière mesurable sans engager de refonte lourde. L'intervention de juillet combine "
    "une amélioration de la vitesse d'affichage et une première optimisation SEO ciblée pour renforcer la visibilité locale de Procarré.",
    styles["BodySmall"],
))

story.append(Paragraph("Travaux prévus", styles["Section"]))
actions = [
    "<b>Performance - premier lot de photographies :</b> sélection et conversion d'une partie des images les plus lourdes vers des fichiers plus légers et adaptés au web.",
    "<b>Performance mobile :</b> remplacement des fichiers concernés, vérification de leur affichage et conservation d'une qualité suffisante pour valoriser les réalisations.",
    "<b>SEO - pages prioritaires :</b> amélioration du titre SEO et de la meta description de l'accueil et d'une page service prioritaire afin de mieux cibler les recherches locales autour de Manosque.",
    "<b>SEO - contenu et maillage :</b> ajustement léger du titre principal ou du texte d'introduction et ajout d'un lien interne pertinent vers la demande de devis ou une prestation associée.",
]
for item in actions:
    story.append(Paragraph(item, styles["BulletSmall"], bulletText="•"))

story.append(Spacer(1, 2 * mm))
story.append(Paragraph("Résultats attendus", styles["Section"]))
cards = Table([
    [
        [
            Paragraph("Chargement allégé", styles["CardTitle"]),
            Paragraph("Les pages concernées nécessitent moins de données lors de l'affichage des photographies optimisées.", styles["CardText"]),
        ],
        [
            Paragraph("Meilleure expérience mobile", styles["CardTitle"]),
            Paragraph("Les visuels se chargent plus rapidement sur les téléphones et les connexions limitées.", styles["CardText"]),
        ],
        [
            Paragraph("Visibilité locale", styles["CardTitle"]),
            Paragraph("Des pages plus claires pour Google sur l'activité et les services proposés autour de Manosque.", styles["CardText"]),
        ],
    ]
], colWidths=[55 * mm, 55 * mm, 55 * mm])
cards.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
    ("BOX", (0, 0), (-1, -1), 0.6, LINE),
    ("INNERGRID", (0, 0), (-1, -1), 0.6, LINE),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
]))
story.append(cards)
story.append(Spacer(1, 5 * mm))

next_box = Table([[Paragraph(
    "<b>Compte rendu de fin d'intervention</b><br/>À l'issue des travaux, un résumé indiquera les pages optimisées, les photographies converties et les premiers indicateurs à surveiller dans Google Search Console et PageSpeed.",
    styles["BodySmall"],
)]], colWidths=[165 * mm])
next_box.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), HexColor("#FFF3F2")),
    ("BOX", (0, 0), (-1, -1), 1, RED),
    ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
    ("TOPPADDING", (0, 0), (-1, -1), 3.5 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5 * mm),
]))
story.append(next_box)

doc.build(story)
print(OUTPUT)
