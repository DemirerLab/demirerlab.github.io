---
title: Nanotechnology
menu-order: 1
redirect_from:
  - /copy-of-rhizosphere/
---

{% include section.html background="images/research/nanotechnology/hero.jpg" %}

# Nanoparticle-Mediated Delivery <br>for Improved Plant Genetic Engineering

{% include section.html %}

{% capture col1 %}
Welcome to our research initiative at the forefront of plant genetic engineering, developing nanomaterials that deliver biomolecules to crops. At the intersection of nanotechnology and agriculture, our research aims to establish platforms for precisely delivering biomolecules, such as proteins, nucleic acids, and small molecules, to plant cells. To this end, current projects in our lab focus on extracellular Contractile Injection Systems (eCIS) and Virus-Like Particles (VLPs) as promising platforms for biomolecular delivery. By engineering these tools, we aim to enable efficient and ubiquitous delivery of genome-editing reagents to model organisms and important crops for both transient and stable transformation. Our overarching objective is to develop groundbreaking technologies that advance plant engineering and improve crop productivity and sustainability.
{% endcapture %}

{% capture col2 %}
![Delivery platforms used in the lab, including virus-like particles, carbon dots and extracellular contractile injection systems]({{ '/images/research/nanotechnology/overview.jpg' | relative_url }})
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html %}

## Extracellular Contractile Injection Systems (eCIS) for Protein Delivery into Plant Cells

{% capture col1 %}
<video autoplay muted loop playsinline controls src="{{ '/files/ecis-animation.mp4' | relative_url }}" style="width:100%"></video>
{% endcapture %}

{% capture col2 %}
![Structural model of the FLS2-flg22 binding interaction]({{ '/images/research/nanotechnology/ecis-1.jpg' | relative_url }})
{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

eCIS are phage tail–derived nanomachines that enable direct translocation of protein cargo across cellular membranes. Our work establishes eCIS as a programmable platform for efficient delivery of functional proteins into plant cells, addressing a central limitation in plant biotechnology. A key feature of eCIS systems is their modularity. Both targeting specificity and payload composition can be rationally engineered: receptor-binding proteins can be modified to retarget particles to plant cell surfaces, while effector domains can be replaced with proteins of interest, such as enzymes, transcription factors, or genome-engineering tools. This enables precise control over where and how proteins are delivered, supporting applications that require spatial or cell-type specificity.

We demonstrate that engineered eCIS particles enable efficient, direct delivery of functional proteins into plant cells, resulting in measurable intracellular activity without DNA integration. Delivered cargo retains activity in planta, establishing eCIS as a viable platform for transient, programmable manipulation of plant cellular functions across species and tissue contexts. Delivered proteins can modulate signaling pathways, reprogram gene expression, or perform catalytic activities directly upon entry. A central objective of our research is to translate eCIS, a naturally evolved microbial weapon, into a scalable, programmable delivery technology for plants. By integrating protein engineering, structural biology, and plant gene editing, we aim to define design principles governing targeting efficiency, cargo loading, and intracellular activity. Ultimately, this work establishes eCIS as a new class of biologically derived nanodevices for precision plant engineering, complementing and extending existing delivery modalities.

![Cre-loaded eCIS particles activate a FLEX YFP reporter in plant cells]({{ '/images/research/nanotechnology/ecis-2.jpg' | relative_url }})

{% include section.html %}

## TMV Virus-like Particles (VLPs) for Small Molecule Delivery to Plants

![TMV VLP assembly and loading, targeted small molecule delivery to plants, and enhanced crop protection]({{ '/images/research/nanotechnology/tmv-vlp-1.jpg' | relative_url }})

Tobacco mosaic virus (TMV)–derived virus-like particles (VLPs) provide a structurally defined, biocompatible nanoplatform for delivering small molecule cargoes to plants. These rod-shaped protein assemblies retain the self-organizing architecture and high aspect ratio of TMV while lacking infectious viral genomes, enabling precise cargo loading without replication or pathogenicity. Their well-characterized assembly, surface chemistry, and environmental stability make TMV VLPs particularly suitable for agricultural deployment.

Our work leverages TMV VLPs as programmable carriers for delivering priming agents and bioactive molecules directly to plant tissues. We encapsulate or associate small molecules such as polyamines (e.g., putrescine) and immune elicitors (e.g., flg22 peptide) within or on the VLP scaffold to enable controlled transport, enhanced stability, and sustained release. Upon application, VLPs facilitate efficient leaf and tissue penetration, protect cargo from rapid degradation, and enable localized or systemic distribution within the plant.

To expand functionality and optimize performance, we integrate multiple engineering strategies spanning rational protein design, directed evolution, and bioorthogonal conjugation chemistries. Rational engineering enables precise modification of coat protein interfaces and surface residues to tune assembly, stability, and cargo affinity. Directed evolution approaches allow selection of VLP variants with improved delivery efficiency or environmental robustness. In parallel, bioorthogonal click chemistry strategies enable site-specific and modular attachment of diverse cargoes, decoupling particle assembly from payload identity and enabling scalable, chemically defined formulations.

![TMV-derived VLPs could be used to deliver polyamine priming agents into plants]({{ '/images/research/nanotechnology/tmv-vlp-2.jpg' | relative_url }})

{% include section.html %}

## Plant Genetic Engineering via Nanoparticle-Mediated Meristem Transformation

![Shoot apical meristem cell layers and nanoparticle-mediated delivery of CRISPR cargoes into the SAM]({{ '/images/research/nanotechnology/meristem.png' | relative_url }})

The shoot apical meristem (SAM) is located at the growing tip of plants and serves as a reservoir of stem cells that generate all aboveground plant organs. This makes it an ideal target for achieving heritable gene editing, without the need for tedious and complex tissue culture or regeneration processes. Edited stem cells within the SAM can ultimately give rise to edited germ cells in the flower, resulting in heritable genetic modifications in subsequent generations. Building on our lab's established synthesis routes for VLPs and eCIS, we are developing a nanoparticle-based delivery system to efficiently deliver genome-editing cargoes to the SAM for heritable, transgene-free plant gene editing.

{% include section.html %}

## Related publications

{% include list.html data="citations" component="citation" filter="tags and tags.include?('nanotechnology')" %}

{% capture content %}
{%
  include figure.html
  image="images/research/nanotechnology/pub-ecis-protein-delivery.jpg"
  link="https://doi.org/10.1101/2025.08.22.671880"
  caption="An extracellular contractile injection system for receptor-mediated protein delivery into plant cells."
%}
{%
  include figure.html
  image="images/research/nanotechnology/pub-vacuum-sonication.jpg"
  link="https://doi.org/10.1021/acssynbio.5c00855"
  caption="Vacuum and sonication treatment enables efficient transient gene expression in various monocot and eudicot plant seedlings."
%}
{%
  include figure.html
  image="images/research/nanotechnology/pub-carbon-nanomaterial-probes.jpg"
  link="https://doi.org/10.1021/acs.chemrev.3c00581"
  caption="Carbon nanomaterial fluorescent probes and their biological applications."
%}
{%
  include figure.html
  image="images/research/nanotechnology/pub-protein-nanoparticle-conjugation.jpg"
  link="https://doi.org/10.1016/j.trechm.2024.06.004"
  caption="Chemical conjugation innovations for protein nanoparticles."
%}
{% endcapture %}

{% include grid.html content=content %}
