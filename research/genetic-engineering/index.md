---
title: Genetic engineering
menu-order: 2
redirect_from:
  - /copy-of-rhizosphere-1/
---

{% include section.html background="images/research/genetic-engineering/hero.jpg" %}

# Advancing Genetic Engineering Toolbox in Plants

{% include section.html %}

Plant genetic engineering is emerging as a promising avenue for imparting new traits, including enhanced resilience to environmental conditions, higher crop yields, and improved quality. Nevertheless, plant engineering faces multiple hurdles, ranging from a need for a better understanding of plant genomes and expression profiles to the development of advanced DNA-editing tools.

We aim to establish CRISPR-associated transposases (CAST) and R2 retrotransposons in plants for programmable, high-efficiency DNA integration. Such biotechnologies for plants will enable basic discoveries in plant genomics, such as the identification of essential genes and screening of ideal loci for exogenous gene insertion and expression. It will also enable improved capabilities, such as building developmental or metabolic pathways to provide biotic and abiotic stress tolerance, combat new plant epidemics and the adverse effects of climate change, and enable scalable and affordable biosynthesis of valuable products in plants.

{% include section.html %}

## Retroelement-Mediated Targeted Genome Insertion in Plants

Another group of transposons, non-long terminal repeat (LTR) retrotransposons, utilize an RNA intermediate to transpose into genomic safe harbor loci, specifically within ribosomal RNA sites, which are present in multiple copies across most eukaryotic genomes, including those of plants. During target primed reverse transcription, the open reading frame encoded by retrotransposons (retroelements) uses its own RNA as a template to synthesize complementary DNA at a very specific site within the 28S rDNA. Non-LTR retroelements have the advantage of smaller open reading frames (~3kb) and can integrate similar-sized payloads (~4kb) with high on-target specificity. They also achieve these genomic insertion events without reliance on double-stranded DNA breaks or heavy reliance on host machinery.

![R2 retroelements from Bombyx mori and Taeniopygia guttata and the target primed reverse transcription mechanism]({{ '/images/research/genetic-engineering/retroelement-1.png' | relative_url }})

We have adapted eukaryotic non-LTR retroelements from _Bombyx mori_ and _Taeniopygia guttata_ for targeted insertions into the multicopy 25S ribosomal DNA safe harbor site via RNA-mediated target-primed reverse transcription (TPRT) in plants, representing the first-time application of retroelements for plant genetic engineering. A retrotransposition reporter carrying the YFP gene with an intron was used to genetically encode the RNA template for genome insertion. We successfully integrated a fluorescent reporter cassette into _Nicotiana benthamiana_ and tomato leaves using retroelements, as confirmed by imaging and sequencing.

![Cargo construct, intron splicing of the cargo RNA, and the integration product at the 28S rDNA target site]({{ '/images/research/genetic-engineering/retroelement-2.png' | relative_url }})

Next, we aim to associate retrotransposons with CRISPR effectors, such as Cas9, to achieve RNA-guided targeted insertions in other genomic locations. Current work aims to enhance the efficiency of retroelement-mediated targeted insertions, thereby providing a more effective tool for targeted plant genome insertions. Recent studies demonstrate that RNA molecules can be modified to enable their transport to meristem tissue. We aim to engineer retroelement RNA templates for meristematic mobility, enabling stable genomic integration without introducing transgenic sequences—addressing the challenge of transformation tools that can penetrate meristematic tissues.

{% include section.html %}

## Targeted DNA Insertion in Plants by CRISPR-Transposases

![Helper, donor and target constructs of the CAST system, with episomal and chromosomal integration paradigms]({{ '/images/research/genetic-engineering/cast.jpg' | relative_url }})

The CAST system is separated into three parts for expression. Helper plasmid (pHelper) contains all essential CAST proteins and guide RNA in monocistronic cassettes. Donor plasmid (pDonor) contains the donor DNA, which is the cargo sequence flanked by transposon left and right ends (LE and RE). The whole transposon part is incorporated into a geminivirus-derived replication vector, which is designed to increase the donor DNA copy number and thereby enhance integration efficiency. Target plasmid (pTarget) contains the intended target site for integration, which is only used in the episomal approach. In the chromosomal approach, target sites are selected from native genomic sequences.

The proof of concept of CAST functioning in the plant system is separated into two paradigms. Episomal integration occurs in a free plasmid in a PEG-mediated protoplast transfection. Chromosomal integration refers to integration into genomic DNA. Depending on the tissue being leaf or flower, the transformation can be transient or stable. Going forward, we aim to optimize integration efficiency, cargo size, and eventually engineer a stable transgenic line. Our efforts hold promise for advancing precision plant genome engineering, with potential impact on plant biology and agricultural biotechnology.

{% include section.html %}

## Developing Assays for Quantifying Heterologous Protein Expression

![HiBiT-tagged expression constructs, agroinfiltration workflow and the HiBiT lytic luminescence assay]({{ '/images/research/genetic-engineering/expression-assay.png' | relative_url }})

The expression constructs were designed to fuse a protein of interest to both HiBiT and NLS tags. Among many methods explored, we eventually developed an optimized HiBiT lytic assay for a nuclear-localized protein.

Individual constructs can be infiltrated into _N. benthamiana_ leaves using the Agroinfiltration approach, and samples are collected 2 days after infiltration. LgBiT reagent is added to the protein lysate solution. LgBiT will complex with HiBiT tag, generating luminance as an indicator of the presence of the HiBiT-tagged protein. Our successful detection of protein expression establishes a robust foundation for future endeavors to optimize heterologous protein expression.

{% include section.html %}

## Related publications

{% include list.html data="citations" component="citation" filter="tags and tags.include?('genetic-engineering')" %}

{% capture content %}
{%
  include figure.html
  image="images/research/genetic-engineering/pub-r2-retroelement-complexes.jpg"
  link="https://doi.org/10.1038/s41587-026-03197-y"
  caption="Optimized R2 retroelement complexes for DNA insertion into plant genomes."
%}
{%
  include figure.html
  image="images/research/genetic-engineering/pub-crispr-associated-transposases.jpg"
  link="https://doi.org/10.64898/2026.07.15.738807"
  caption="CRISPR-Associated Transposases Enable Programmable DNA Integration in Plants"
%}
{%
  include figure.html
  image="images/research/genetic-engineering/pub-synthetic-biology-molecular-farming.jpg"
  link="https://doi.org/10.1016/j.tibtech.2023.03.007"
  caption="Synthetic Biology for Plant Genetic Engineering and Molecular Farming."
%}
{% endcapture %}

{% include grid.html content=content %}
