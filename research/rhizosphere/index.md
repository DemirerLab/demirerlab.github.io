---
title: Rhizosphere
menu-order: 3
redirect_from:
  - /about-4/
---

{% include section.html background="images/research/rhizosphere/hero.jpg" %}

# Rhizosphere Engineering and Plant-Microbe Interactions

{% include section.html %}

Plants and microbes have co-existed and evolved together since the beginnings of plant life on earth. This has created a close interdependence between plant hosts and the microbes inhabiting them. Plant microbiomes harbors more genes and enzymatic capabilities than the plant host itself, creating a compelling target for agricultural engineering. Plant growth-promoting bacteria can improve host nutrient acquisition, defense against pathogens, and protection against a variety of other environmental stressors.

Harnessing beneficial plant-microbe interactions is a compelling area for bioengineering work with growing burdens on agriculture due to climate change, environmental fluctuations, nutrient resource limitation etc. Better utilization of the functional capabilities of plant-microbiome interactions presents a sustainable strategy towards decreasing our reliance on environmentally costly agrochemicals and building climate-resilient crops.

{% include section.html %}

## Exudate Engineering for Improved Plant-Microbe Interactions

![Rhizosphere and endosphere bacteria promote plant growth, and modified exudate composition increases the abundance of plant-growth promoting bacteria]({{ '/images/research/rhizosphere/exudate-engineering.png' | relative_url }})

The rhizosphere microbiome is built and maintained through host secretion of carbon-rich root exudates. The composition of these root exudates is dynamic and ultimately influences the structure and function of the soil microbial community. This can have significant implications for plant phenotype and stress responses. Understanding the chemical communication mediating plant-microbe interactions will inform efforts to selectively perturb soil microbial communities and stimulate desirable plant-microbiome features.

We are exploring the modification of root exudate composition as an approach to plant-microbiome engineering. Through the secretion of species-specific prebiotic molecules to promote the growth of desirable bacteria in the rhizosphere, we aim to create plants that have optimized plant-microbe interactions that can better tolerate stress. To do this, exudate targets are identified by screening the substrate utilization and chemotactic capabilities of well-characterized nitrogen-fixing and phosphate-solubilizing bacteria. The ability of these chemicals to act as prebiotic targets in the presence of diverse native soil communities is investigated prior to the construction of engineered plants.

{% include section.html %}

## Engineered Living Materials for Plant Drought Resilience

![A stressed plant releases a root exudate signal, a root biofilm senses it and remodels its extracellular matrix to mitigate abiotic stress]({{ '/images/research/rhizosphere/engineered-living-materials.png' | relative_url }})

Protecting plants from extreme temperatures, drought, high salinity, and other abiotic stressors is an increasingly relevant challenge in the face of more frequent climate extremes and higher demands on agriculture. Engineered living materials offer unique advantages through combining the flexibility of material sciences with the responsive dynamics of living systems. Of particular interest are biofilms, natural living materials made up of microbes and the extracellular matrix they produce themselves. Biofilms existing on root surfaces can be engineered to be responsive to plant abiotic stresses through environmental sensing and subsequent remodeling of their extracellular matrix. Ultimately we are interested in engineering close associations with microbes and their plant hosts via engineered living materials that build resilience to changing environments.

{% include section.html %}

## Sentinel Plants for Sustainable Nutrient Management

![Sentinel plants and their role in soil monitoring, with nutrient-responsive promoters driving reporters in leaves]({{ '/images/research/rhizosphere/sentinel-plants-nutrients.png' | relative_url }})

In addressing the inefficiencies of current agricultural nutrient management, a key limitation lies in the absence of efficient methodologies for quantifying plant-accessible nutrients in soil. Prevailing strategies depend on soil sampling, a process that is not only costly and laborious, but also marked by variability and a lack of real-time data, impeding timely intervention. In pursuit of a solution, we propose a novel strategy: employing plants as _in-situ_ bioindicators. This concept leverages the inherent connection of plants with their soil milieu, facilitating the direct and dynamic assessment of nutrient fluctuations below the surface through plant synthetic biology approaches.

{% include section.html %}

## Sentinel Plants for Monitoring Gene Expression Dynamics Within Soil Microbes

![Engineered bacteria with a cgRNA biosensor report soil microbial activity as a visual output in plant leaves aboveground]({{ '/images/research/rhizosphere/sentinel-plants-soil-microbes.jpg' | relative_url }})

We propose to develop a system for continuous monitoring of gene expression dynamics in rhizosphere bacteria within their natural soil environment. This will be achieved by creating platforms for efficient genetic payload delivery into a wide range of rhizosphere bacteria via plasmid conjugation, intracellular detection of arbitrary mRNAs using conditional guide RNA (cgRNA) circuits, and programmable secretion of a signaling compound that activates a visual response in plant tissues aboveground.

To ensure our platform's generality and applicability for detecting gene expression in diverse bacterial taxa, the reporter system must synthesize the signaling molecule with minimal metabolic burden, enabling detection by a wide range of soil bacteria and plant roots. The signal must propagate rapidly in an acropetal direction, reaching shoots and leaves, and should have a short persistence time in aboveground tissues once deactivated. Additionally, the plant reporter must exhibit minimal response to background signal concentrations while maintaining a wide dynamic range for accurate quantitative characterization. To achieve these goals, we are engineering Arabidopsis thaliana that are responsive to plant hormone cytokinin and puse p-coumaryl homoserine lactone (pC-HSL).

This tool will provide new insights into the rhizosphere's impact on plant health, greenhouse gas emissions, and soil nutrient cycling, supporting numerous sustainability efforts.

{% include section.html %}

## Synthetic Microbial Communities (SynComs) for Plant Beneficial Traits

![Defined synthetic microbial communities are engineered and monitored in the rhizosphere to confer beneficial plant traits]({{ '/images/research/rhizosphere/syncoms.jpg' | relative_url }})

SynComs provide a tractable framework for dissecting and engineering plant-microbe interactions with defined composition and function. In contrast to complex, poorly resolved natural microbiomes, SynComs enable controlled interrogation of causal relationships between microbial taxa, metabolic activities, and host phenotypes. Our research leverages this reductionist-to-reconstructive approach to identify minimal consortia that reproducibly confer beneficial plant traits, including enhanced nutrient acquisition, drought resilience, and growth promotion. We integrate systems biology, synthetic biology, and quantitative phenotyping to design and evaluate SynComs with programmable functions.

{% include section.html %}

## Related publications

{% include list.html data="citations" component="citation" filter="tags and tags.include?('rhizosphere')" %}

{% capture content %}
{%
  include figure.html
  image="images/research/rhizosphere/pub-sentinel-plants-nitrate.jpg"
  link="https://doi.org/10.1073/pnas.2609666123"
  caption="Sentinel plants enable quantitative monitoring of bioavailable nitrate in soils and microbial environments"
%}
{%
  include figure.html
  image="images/research/rhizosphere/pub-plant-sensors-soil-microbes.jpg"
  link="https://doi.org/10.64898/2026.03.23.713735"
  caption="Plant Sensors for Detection of Belowground Soil Microbial Activity."
%}
{%
  include figure.html
  image="images/research/rhizosphere/pub-peptide-hormones.jpg"
  link="https://doi.org/10.1038/s44383-025-00018-0"
  caption="Fundamental and Applied Insights into Peptide Hormones Linking Nitrogen and Phosphate Sensing to Microbial Interactions."
%}
{%
  include figure.html
  image="images/research/rhizosphere/pub-capillary-tube-holder.jpg"
  link="https://doi.org/10.1128/jb.00384-25"
  caption="A 3D Printed Capillary Tube Holder for High-Throughput Chemotaxis Assays"
%}
{%
  include figure.html
  image="images/research/rhizosphere/pub-plant-microbe-communication.jpg"
  link="https://doi.org/10.1016/j.copbio.2024.103150"
  caption="Engineering plant–microbe communication for plant nutrient use efficiency."
%}
{%
  include figure.html
  image="images/research/rhizosphere/pub-soil-microbiomes.jpg"
  link="https://doi.org/10.1016/j.tim.2024.02.003"
  caption="Engineering agricultural soil microbiomes and predicting plant phenotypes."
%}
{% endcapture %}

{% include grid.html content=content %}
