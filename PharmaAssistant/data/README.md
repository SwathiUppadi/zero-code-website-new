# PharmaAssistant Data Directory

This directory contains reference data, templates, and regulatory information used by the PharmaAssistant application.

## Directory Structure

- `/templates` - Document templates in Markdown format
  - `csr-template.md` - Clinical Study Report template (ICH E3)
  - `ib-template.md` - Investigator Brochure template
  - `pil-template.md` - Patient Information Leaflet template
  - `protocol-template.md` - Clinical Trial Protocol template

## Template Format

All templates are provided in Markdown format with the following structure:

1. Top-level headings (`#`) represent document titles
2. Second-level headings (`##`) represent major sections
3. Third-level headings (`###`) represent subsections
4. Text under each heading provides guidance on what to include in that section

## Adding New Templates

To add a new template:

1. Create a new Markdown file in the `/templates` directory with a descriptive name (e.g., `new-template.md`)
2. Structure the template with appropriate headings and content guidance
3. Add the template information to the `templateController.js` file in the backend

## Customizing Templates

Templates can be customized to meet specific organizational or regulatory requirements:

1. Edit the relevant template file
2. Update section headings or content guidance as needed
3. Ensure the template still follows the expected format structure

## Regulatory Information

The application includes references to key regulatory guidelines:

- ICH E3: Structure and Content of Clinical Study Reports
- ICH E6: Good Clinical Practice
- ICH E8: General Considerations for Clinical Trials
- ICH E9: Statistical Principles for Clinical Trials
- FDA and EMA guidance documents

This regulatory information is used for document generation, compliance checking, and providing guidance to users.
