# Design Guidelines

{
  "designGuidelines": {
    "colorSystem": {
      "primary": "#007bff",
      "secondary": "#6c757d",
      "accent": "#17a2b8",
      "success": "#28a745",
      "error": "#dc3545",
      "warning": "#ffc107",
      "background": "#f8f9fa",
      "surface": "#ffffff",
      "textColors": {
        "primary": "#212529",
        "secondary": "#6c757d",
        "onSuccess": "#ffffff",
        "onError": "#ffffff",
        "onWarning": "#212529"
      }
    },
    "typography": {
      "fontFamilies": {
        "primary": "'Helvetica Neue', Helvetica, Arial, sans-serif",
        "secondary": "'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif"
      },
      "fontSizes": {
        "title": "24px",
        "subTitle": "20px",
        "body": "16px",
        "caption": "12px"
      },
      "lineHeights": {
        "title": "32px",
        "subTitle": "28px",
        "body": "24px",
        "caption": "18px"
      },
      "fontWeights": {
        "light": "300",
        "regular": "400",
        "bold": "700"
      }
    },
    "spacing": {
      "marginAndPadding": {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px"
      },
      "gridSystem": "12 columns",
      "componentSpacing": "16px"
    },
    "components": {
      "buttonStyles": {
        "primary": {
          "background": "#007bff",
          "color": "#ffffff",
          "hover": {
            "background": "#0056b3"
          }
        },
        "secondary": {
          "border": "1px solid #6c757d",
          "color": "#6c757d",
          "hover": {
            "border": "1px solid #5a6268",
            "color": "#5a6268"
          }
        }
      },
      "inputStyles": {
        "default": {
          "border": "1px solid #ced4da",
          "background": "#ffffff",
          "focus": {
            "border": "1px solid #80bdff"
          }
        }
      },
      "cardStyles": {
        "default": {
          "background": "#ffffff",
          "border": "1px solid #e3e6f0",
          "shadow": "0 1px 3px rgba(0,0,0,.05)"
        }
      },
      "formStyles": {
        "label": {
          "font": {
            "size": "16px",
            "weight": "regular"
          },
          "marginBottom": "8px"
        },
        "input": {
          "marginBottom": "16px"
        }
      },
      "navigationStyles": {
        "bar": {
          "background": "#007bff",
          "color": "#ffffff"
        },
        "link": {
          "default": {
            "color": "#ffffff",
            "hover": "#dddddd"
          }
        }
      }
    },
    "animations": {
      "transitions": "0.3s ease-in-out",
      "hoverEffects": {
        "button": "background-color 0.2s ease-in-out",
        "input": "border-color 0.2s ease-in-out"
      },
      "loadingStates": "circular progress or skeleton screens",
      "pageTransitions": "fade in 0.3s ease-in-out"
    },
    "responsiveDesign": {
      "breakpoints": {
        "xs": "<576px",
        "sm": ">=576px",
        "md": ">=768px",
        "lg": ">=992px",
        "xl": ">=1200px"
      },
      "mobileFirstApproach": true,
      "gridSystem": "12 columns",
      "componentAdaptations": {
        "buttons": {
          "sm": {
            "padding": "8px 12px",
            "fontSize": "14px"
          },
          "lg": {
            "padding": "12px 24px",
            "fontSize": "16px"
          }
        },
        "inputFields": {
          "sm": {
            "padding": "10px 12px"
          },
          "lg": {
            "padding": "12px 24px"
          }
        }
      }
    }
  }
}