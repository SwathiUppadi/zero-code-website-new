# PharmaAssistant: Regulatory Medical Writing Assistant

A specialized tool designed to help pharmaceutical professionals create and refine documents for clinical trials and regulatory submissions. PharmaAssistant leverages advanced AI to generate, summarize, and rewrite content in formats aligned with FDA/EMA requirements, ensuring compliance in tone, structure, and terminology.

## 🔍 Key Features

- 📝 **Document Generation**: Create regulatory-compliant documents from templates or source content
- 📋 **Regulatory Summaries**: Generate clinical trial summaries in standardized regulatory formats
- 🔄 **Document Conversion**: Transform academic papers into plain English or regulatory-compliant language
- ✅ **Compliance Checking**: Compare documents against regulatory templates and receive improvement suggestions
- 📚 **Regulatory Guidance**: Access information about clinical trial processes and standard document structures

## 📄 Supported Document Types

- Clinical Study Reports (CSR)
- Investigator Brochures (IB)
- Clinical Trial Protocols
- Patient Information Leaflets
- FDA/EMA Submission Documents
- Informed Consent Forms
- Clinical Trial Summaries

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/PharmaAssistant.git
cd PharmaAssistant
```

2. Set up environment variables
```bash
cp .env.example .env
```
Edit the `.env` file to add your API keys and configuration.

3. Install dependencies
```bash
npm run install-all
```

4. Start the development server
```bash
npm run dev
```

## 🖥️ Application Structure

```
PharmaAssistant/
├── backend/              # Express API server
│   ├── controllers/      # Request handlers
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── server.js         # Entry point
├── data/                 # Reference templates and regulatory information
│   └── templates/        # Document templates
├── frontend/             # React-based user interface
│   ├── public/           # Static assets
│   └── src/              # React components and logic
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Usage

### Document Generation

1. Navigate to the "Generate" tab
2. Select a document type (CSR, IB, Protocol, etc.)
3. Enter your source content or upload a file
4. Configure generation settings
5. Click "Generate Document"
6. Review, edit, and download the generated document

### Document Summarization

1. Navigate to the "Summarize" tab
2. Upload or paste your document content
3. Select the target audience (Regulators, Patients, etc.)
4. Click "Summarize Document"
5. Review and download the summary

### Compliance Checking

1. Navigate to the "Compliance" tab
2. Upload or paste your document
3. Select the applicable regulatory standard
4. Click "Check Compliance"
5. Review the compliance score and suggested improvements

### Text Simplification

1. Navigate to the "Simplify" tab
2. Upload or paste your technical content
3. Select the target reading level
4. Click "Simplify Text"
5. Review and download the simplified content

## 🔒 Regulatory Compliance

This tool provides templates and suggestions based on:

- ICH-GCP Guidelines
- FDA Guidance Documents
- EMA Requirements
- Standard industry practices

**Note:** All generated content should be reviewed by qualified professionals before submission to regulatory authorities. This tool is designed to assist with document preparation but does not replace professional review.

## 🔄 AI Integration

PharmaAssistant can be configured to work with different AI providers:

- OpenAI (GPT-4)
- Anthropic (Claude)
- Azure OpenAI Service

Configure your preferred provider in the `.env` file.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This software is provided as-is and is intended to assist regulatory medical writers. It does not guarantee regulatory compliance, and all generated content should be reviewed by qualified professionals. Users are responsible for ensuring that their regulatory documents meet all applicable requirements.
