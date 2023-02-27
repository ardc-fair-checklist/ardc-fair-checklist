import { l as latest } from "../../../chunk-18cccac3.js";
import { H as ref, I as computed, u as openBlock, t as createElementBlock, v as createBaseVNode, J as toDisplayString, x as createStaticVNode, d as defineComponent, o as onMounted, A as unref, E as pushScopeId, G as popScopeId, K as createCommentVNode, y as renderSlot, z as normalizeClass, B as createTextVNode, C as createVNode, D as withCtx, F as Fragment, L as renderList, M as createBlock } from "../../../chunk-34b0814a.js";
import { _ as _export_sfc, a as _imports_0, b as _imports_1 } from "../../../chunk-55859c7c.js";
import { u as usePageContext } from "../../../chunk-3ae7c80c.js";
import { _ as _imports_0$1 } from "../../../chunk-797968b4.js";
import { u as useCssVars, w as withKeys, a as withModifiers } from "../../../chunk-98817835.js";
const principles = ["f", "a", "i", "r"];
const state = ref({
  compliance: [],
  questions: []
});
const compliance = computed(() => state.value.compliance);
const questions$1 = computed(() => state.value.questions);
const setCompliance = (newCompliance) => {
  state.value.compliance = newCompliance;
};
const setQuestions = (questionsNoIndex) => {
  state.value.questions = questionsNoIndex.map((q, i) => ({ ...q, index: i }));
  state.value.compliance = new Array(questionsNoIndex.length).fill(0);
};
const nQuestions = computed(() => {
  const deriveNumberOfQuestions = (principle) => state.value.questions.filter((question) => question.principle === principle).length;
  return {
    f: deriveNumberOfQuestions("f"),
    a: deriveNumberOfQuestions("a"),
    i: deriveNumberOfQuestions("i"),
    r: deriveNumberOfQuestions("r"),
    total: state.value.questions.length
  };
});
const nPointsMax = computed(() => {
  const derivePointsMax = (principle) => {
    let selectedQuestions = state.value.questions;
    if (principle !== "*") {
      selectedQuestions = state.value.questions.filter((q) => q.principle === principle);
    }
    return selectedQuestions.map((question) => Math.max(...question.answers.map((answer) => answer.score))).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };
  return {
    f: derivePointsMax("f"),
    a: derivePointsMax("a"),
    i: derivePointsMax("i"),
    r: derivePointsMax("r"),
    total: derivePointsMax("*")
  };
});
const slices = computed(() => {
  return {
    f: [
      0,
      nQuestions.value.f
    ],
    a: [
      nQuestions.value.f,
      nQuestions.value.f + nQuestions.value.a
    ],
    i: [
      nQuestions.value.f + nQuestions.value.a,
      nQuestions.value.f + nQuestions.value.a + nQuestions.value.i
    ],
    r: [
      nQuestions.value.f + nQuestions.value.a + nQuestions.value.i,
      nQuestions.value.total
    ]
  };
});
const nAnswers = computed(() => {
  const numbers = questions$1.value.map((q) => q.answers.length);
  return {
    f: numbers.slice(...slices.value.f),
    a: numbers.slice(...slices.value.a),
    i: numbers.slice(...slices.value.i),
    r: numbers.slice(...slices.value.r)
  };
});
const fairQueryParams = computed(() => [
  `f=${state.value.compliance.slice(...slices.value.f).map((elem) => elem.toString()).join("")}`,
  `a=${state.value.compliance.slice(...slices.value.a).map((elem) => elem.toString()).join("")}`,
  `i=${state.value.compliance.slice(...slices.value.i).map((elem) => elem.toString()).join("")}`,
  `r=${state.value.compliance.slice(...slices.value.r).map((elem) => elem.toString()).join("")}`
].join("&"));
const progress = computed(() => {
  const scoreArrays = state.value.questions.map((q) => q.answers.map((a) => a.score));
  const scores = state.value.compliance.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]);
  const summation = (previousValue, currentValue) => previousValue + currentValue;
  if (nQuestions.value.total === 0) {
    return {
      f: "0%",
      a: "0%",
      i: "0%",
      r: "0%"
    };
  }
  return {
    f: `${100 * scores.slice(...slices.value.f).reduce(summation, 0) / nPointsMax.value.f}%`,
    a: `${100 * scores.slice(...slices.value.a).reduce(summation, 0) / nPointsMax.value.a}%`,
    i: `${100 * scores.slice(...slices.value.i).reduce(summation, 0) / nPointsMax.value.i}%`,
    r: `${100 * scores.slice(...slices.value.r).reduce(summation, 0) / nPointsMax.value.r}%`
  };
});
const ChecklistAbout_vue_vue_type_style_index_0_scoped_85dd1aea_lang = "";
const _sfc_main$a = {};
const _hoisted_1$9 = /* @__PURE__ */ createStaticVNode('<div class="logos" data-v-85dd1aea><a href="https://esciencecenter.nl" target="_blank" data-v-85dd1aea><img class="logo" src="' + _imports_0 + '" alt="nlesc logo" data-v-85dd1aea></a><a href="https://ardc.edu.au" target="_blank" data-v-85dd1aea><img class="logo" src="' + _imports_1 + '" alt="ardc logo" data-v-85dd1aea></a></div>', 1);
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("footer", null, [
    _hoisted_1$9,
    createBaseVNode("p", null, toDisplayString("This checklist is a collaborative effort by Netherlands eScience Center and Australian Research Data Commons."), 1)
  ]);
}
const ChecklistAbout = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-85dd1aea"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-dc0faeca"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "badges" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", null, "Get the badge", -1));
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-markdown-badge" }, "Markdown")
], -1));
const _hoisted_4$2 = { class: "row" };
const _hoisted_5$2 = ["value"];
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-rst-badge" }, "ReStructured Text")
], -1));
const _hoisted_8 = { class: "row" };
const _hoisted_9 = ["value"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h3", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "textarea-html-badge" }, "HTML")
], -1));
const _hoisted_12 = { class: "row" };
const _hoisted_13 = ["value"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "copied-text" }, " copied ", -1));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBadgeSnippets",
  setup(__props) {
    const alt = "FAIR checklist badge";
    const href = ref("");
    const appBaseUrl = ref("");
    const htmlBadge = computed(() => `<a href="${href.value}?${fairQueryParams.value}">
  <img src="${appBaseUrl.value}badge.svg" alt="${alt}">
</a>
`);
    const markdownBadge = computed(() => `[![${alt}](${appBaseUrl.value}badge.svg)](${href.value}?${fairQueryParams.value})
`);
    const rstBadge = computed(() => `.. image:: ${appBaseUrl.value}badge.svg
   :target: ${href.value}?${fairQueryParams.value}
   :alt: ${alt}
`);
    const copyButtonClickHandler = (event) => {
      if (event.target === null) {
        return;
      }
      const button = event.target;
      if (button.parentElement === null) {
        return;
      }
      if (button.parentElement.previousElementSibling === null) {
        return;
      }
      const textArea = button.parentElement.previousElementSibling;
      const text = textArea.value;
      navigator.clipboard.writeText(text);
      if (button.nextElementSibling === null) {
        return;
      }
      const feedbackString = button.nextElementSibling;
      feedbackString.classList.remove("transparent");
      feedbackString.classList.add("opaque");
      setTimeout(() => {
        feedbackString.classList.remove("opaque");
        feedbackString.classList.add("transparent");
      }, 1e3);
    };
    onMounted(() => {
      href.value = `${window.location.origin}/${window.location.pathname.split("/").filter((e) => e !== "").join("/")}`;
      appBaseUrl.value = `${window.location.origin}${"/ssg/"}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        _hoisted_2$4,
        _hoisted_3$4,
        createBaseVNode("div", _hoisted_4$2, [
          createBaseVNode("textarea", {
            id: "textarea-markdown-badge",
            readonly: "",
            value: unref(markdownBadge),
            wrap: "off"
          }, null, 8, _hoisted_5$2),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_6$1
          ])
        ]),
        _hoisted_7$2,
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("textarea", {
            id: "textarea-rst-badge",
            readonly: "",
            value: unref(rstBadge),
            wrap: "off"
          }, null, 8, _hoisted_9),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_10
          ])
        ]),
        _hoisted_11,
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("textarea", {
            id: "textarea-html-badge",
            readonly: "",
            value: unref(htmlBadge),
            wrap: "off"
          }, null, 8, _hoisted_13),
          createBaseVNode("div", { class: "col" }, [
            createBaseVNode("button", {
              role: "button",
              onClick: copyButtonClickHandler
            }, " Copy "),
            _hoisted_14
          ])
        ])
      ]);
    };
  }
});
const ChecklistBadgeSnippets_vue_vue_type_style_index_0_scoped_dc0faeca_lang = "";
const ChecklistBadgeSnippets = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-dc0faeca"]]);
const _hoisted_1$7 = {
  key: 0,
  class: "banner"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBannerParams",
  setup(__props) {
    const bannerMessage = ref("");
    onMounted(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const params = {
        f: searchParams.get("f") || "",
        a: searchParams.get("a") || "",
        i: searchParams.get("i") || "",
        r: searchParams.get("r") || ""
      };
      const chooseBannerMessage = () => {
        const checkPrinciple = (principle) => {
          if (params[principle].length !== nQuestions.value[principle]) {
            return {
              msg: `Query parameter '${principle}' does not have the right number of elements (${nQuestions.value[principle]})`,
              err: true
            };
          }
          if (/^[0-9]+$/.test(params[principle]) === false) {
            return {
              msg: `Query parameter '${principle}' includes unknown character`,
              err: true
            };
          }
          const supplied = params[principle].split("").map((c) => parseInt(c, 10));
          const errors2 = supplied.map((iAnswer, index) => {
            if (iAnswer >= nAnswers.value[principle][index]) {
              return {
                msg: `Query parameter '${principle}' has out-of-range value on position ${index}`,
                err: true
              };
            }
            return { msg: "", err: false };
          }).filter((error) => error.err === true);
          return {
            msg: errors2.map((e) => e.msg).join("; "),
            err: errors2.length > 0
          };
        };
        if (Object.values(params).every((e) => e === "")) {
          return { msg: "", err: false };
        }
        if (Object.values(params).every((e) => e !== ""))
          ;
        else {
          return {
            msg: "When using query parameters, include 'f', 'a', 'i', and 'r'",
            err: true
          };
        }
        const errors = principles.map((p) => checkPrinciple(p)).filter((error) => error.err === true);
        return {
          msg: errors.map((e) => e.msg).join("; "),
          err: errors.length > 0
        };
      };
      const zeros = Array(nQuestions.value.total).fill(0);
      const { msg, err } = chooseBannerMessage();
      bannerMessage.value = msg;
      if (err === true) {
        setCompliance(zeros);
      } else if (Object.values(params).every((e) => e === "")) {
        setCompliance(zeros);
      } else {
        const compl = `${params.f}${params.a}${params.i}${params.r}`;
        setCompliance(compl.split("").map((char) => parseInt(char, 10)));
        window.history.pushState({}, "", [window.location.origin, window.location.pathname].join(""));
      }
    });
    return (_ctx, _cache) => {
      return bannerMessage.value !== "" ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString(bannerMessage.value), 1)) : createCommentVNode("", true);
    };
  }
});
const ChecklistBannerParams_vue_vue_type_style_index_0_scoped_ff9f309c_lang = "";
const ChecklistBannerParams = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ff9f309c"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistLink",
  setup(__props) {
    const pageContext = usePageContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass({ active: unref(pageContext).urlPathname === _ctx.$attrs.href })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const ChecklistLink_vue_vue_type_style_index_0_scoped_452b7f86_lang = "";
const ChecklistLink = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-452b7f86"]]);
const app = "";
const _hoisted_1$6 = {
  key: 0,
  class: "banner"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistBannerVersions",
  setup(__props) {
    const link = computed(() => [
      window.location.origin,
      ...window.location.pathname.split("/").filter((e) => e !== "").slice(0, -1),
      latest.value.software
    ].join("/"));
    const showBanner = ref(false);
    onMounted(() => {
      const { urlPathname } = usePageContext();
      const myVersion = urlPathname.split("/").filter((e) => e !== "").slice(-1)[0];
      showBanner.value = myVersion !== latest.value.software;
    });
    return (_ctx, _cache) => {
      return showBanner.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createTextVNode(" A newer version of this checklist is available at "),
        createVNode(ChecklistLink, { href: unref(link) }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(link)), 1)
          ]),
          _: 1
        }, 8, ["href"]),
        createTextVNode(" , consider upgrading. ")
      ])) : createCommentVNode("", true);
    };
  }
});
const ChecklistBannerVersions_vue_vue_type_style_index_0_scoped_d2923422_lang = "";
const ChecklistBannerVersions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d2923422"]]);
const ChecklistBannerWIP_vue_vue_type_style_index_0_scoped_8a0d31e9_lang = "";
const _sfc_main$5 = {};
const _hoisted_1$5 = { class: "banner" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, " This website is a work in progress. Note that for the time being, the number of questions in the checklist, their order, and their content is subject to change. As a result, any badges are not guaranteed to reliably restore any previous form state. ");
}
const ChecklistBannerWIP = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-8a0d31e9"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-4554f404"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "home" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  width: "128",
  height: "128",
  viewBox: "0 0 128 128",
  version: "1.1",
  id: "svg5",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("defs", { id: "defs2" }),
  /* @__PURE__ */ createBaseVNode("g", { id: "layer1" }, [
    /* @__PURE__ */ createBaseVNode("g", {
      id: "outline",
      transform: "matrix(1.032058,0,0,1.032058,-2.0517123,-5.997519)"
    }, [
      /* @__PURE__ */ createBaseVNode("path", { d: "m 64,13.845703 -57.4746094,41.068359 4.6894534,6.5625\n                            7.96289,-5.689453 V 121.80078 H 49.626953 V 91.585938\n                            H 65.746094 V 121.80078 H 108.82227 V 55.787109 l\n                            7.96289,5.689453 4.68945,-6.5625 C 114.12178,49.660112\n                            106.76885,44.406295 99.416016,39.152344 V 17.582031 H\n                            83.607422 V 27.855469 C 77.071721,23.185398 70.535701,18.515774\n                            64,13.845703 Z m 0,15.738281 34.822266,24.882813 V 111.80078\n                            H 75.746094 V 81.585938 H 39.626953 V 111.80078 H 29.177734\n                            V 54.466797 Z" }),
      /* @__PURE__ */ createBaseVNode("g", null, [
        /* @__PURE__ */ createBaseVNode("path", { d: "m 89.706841,22.049501 h 5.808742 v 12.368457 h -5.808742 z" })
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M 63.999995,24.525796 99.938597,50.206302 V 109.3783 H\n                        76.122651 V 78.194827 H 38.845604 V 109.3783 H 28.061403 V\n                        50.206302 Z",
      id: "inside"
    })
  ])
], -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "view-source" }, [
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/ardc-fair-checklist/ssg/issues/new?labels=user-feedback&template=10_feedback.md" }, " Report an issue "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/ardc-fair-checklist/ssg/issues/new?labels=user-feedback&template=10_feedback.md" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0$1,
      alt: "octocat logo"
    })
  ])
], -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistHeader",
  setup(__props) {
    const linkToHome = `${"/ssg/"}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", null, [
        createBaseVNode("div", _hoisted_1$4, [
          createVNode(ChecklistLink, { href: linkToHome }, {
            default: withCtx(() => [
              _hoisted_2$3
            ]),
            _: 1
          })
        ]),
        _hoisted_3$3
      ]);
    };
  }
});
const ChecklistHeader_vue_vue_type_style_index_0_scoped_4554f404_lang = "";
const ChecklistHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4554f404"]]);
const _hoisted_1$3 = { class: "footer" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = { class: "another-inner" };
const _hoisted_4$1 = { class: "progressbars" };
const _hoisted_5$1 = /* @__PURE__ */ createStaticVNode('<div class="labels" data-v-b168c94e><div class="row" data-v-b168c94e><div class="label" data-v-b168c94e> Findable </div></div><div class="row" data-v-b168c94e><div class="label" data-v-b168c94e> Accessible </div></div><div class="row" data-v-b168c94e><div class="label" data-v-b168c94e> Interoperable </div></div><div class="row" data-v-b168c94e><div class="label" data-v-b168c94e> Reusable </div></div></div><div class="bars" data-v-b168c94e><div class="row" data-v-b168c94e><div class="bar bar-bg" data-v-b168c94e><div class="bar blue" data-v-b168c94e></div></div></div><div class="row" data-v-b168c94e><div class="bar bar-bg" data-v-b168c94e><div class="bar pink" data-v-b168c94e></div></div></div><div class="row" data-v-b168c94e><div class="bar bar-bg" data-v-b168c94e><div class="bar yellow" data-v-b168c94e></div></div></div><div class="row" data-v-b168c94e><div class="bar bar-bg" data-v-b168c94e><div class="bar purple" data-v-b168c94e></div></div></div></div>', 2);
const _hoisted_7$1 = ["disabled"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistProgressBars",
  props: {
    disableButton: { type: Boolean },
    onClick: null,
    progress: null
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "34824d53": __props.progress.f,
      "34824d4e": __props.progress.a,
      "34824d56": __props.progress.i,
      "34824d5f": __props.progress.r
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$1, [
              _hoisted_5$1,
              createBaseVNode("button", {
                disabled: __props.disableButton,
                role: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => __props.onClick())
              }, "Get the badge", 8, _hoisted_7$1)
            ])
          ])
        ])
      ]);
    };
  }
});
const ChecklistProgressBars_vue_vue_type_style_index_0_scoped_b168c94e_lang = "";
const ChecklistProgressBars = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b168c94e"]]);
const _hoisted_1$2 = ["aria-labelledby"];
const _hoisted_2$1 = { class: "answer-radiobutton" };
const _hoisted_3$1 = ["id", "value", "checked"];
const _hoisted_4 = { class: "answer-points" };
const _hoisted_5 = { class: "answer-text" };
const _hoisted_6 = ["for", "id"];
const _hoisted_7 = {
  key: 0,
  class: "answer-elaboration"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistAnswer",
  props: {
    answer: null,
    isChecked: { type: Boolean },
    onClick: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "answer",
        "aria-labelledby": `label-${__props.answer.id}`,
        onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args)),
        onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(
          (...args) => __props.onClick && __props.onClick(...args),
          ["prevent", "stop"]
        ), ["space"])),
        tabindex: "0",
        role: "radio"
      }, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("input", {
            type: "radio",
            id: __props.answer.id,
            value: __props.answer.id,
            checked: __props.isChecked,
            role: "presentation",
            tabindex: "-1",
            "aria-label": ""
          }, null, 8, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4, " (+" + toDisplayString(__props.answer.score) + ") ", 1),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("label", {
            for: __props.answer.id,
            id: `label-${__props.answer.id}`
          }, [
            createTextVNode(toDisplayString(__props.answer.text) + " ", 1),
            __props.answer.elaboration !== "" ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(__props.answer.elaboration), 1)) : createCommentVNode("", true)
          ], 8, _hoisted_6)
        ])
      ], 40, _hoisted_1$2);
    };
  }
});
const ChecklistAnswer_vue_vue_type_style_index_0_scoped_22bcce80_lang = "";
const ChecklistAnswer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-22bcce80"]]);
const _hoisted_1$1 = { class: "question" };
const _hoisted_2 = { class: "question-index shared" };
const _hoisted_3 = { class: "shared" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChecklistQuestion",
  props: {
    question: null
  },
  setup(__props) {
    const props = __props;
    const onClick = (answerIndex) => () => {
      const newCompliance = [
        ...compliance.value.slice(0, props.question.index),
        answerIndex,
        ...compliance.value.slice(props.question.index + 1)
      ];
      setCompliance(newCompliance);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(`${__props.question.index + 1}.`), 1),
        createBaseVNode("fieldset", null, [
          createBaseVNode("legend", _hoisted_3, toDisplayString(`${__props.question.text}`), 1),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.question.answers, (answer, answerIndex) => {
            return openBlock(), createBlock(ChecklistAnswer, {
              answer,
              isChecked: unref(compliance)[__props.question.index] === answerIndex,
              key: answer.id,
              onClick: onClick(answerIndex),
              onKeydown: withKeys(withModifiers(($event) => onClick(answerIndex), ["prevent", "stop"]), ["space"])
            }, null, 8, ["answer", "isChecked", "onClick", "onKeydown"]);
          }), 128))
        ])
      ]);
    };
  }
});
const ChecklistQuestion_vue_vue_type_style_index_0_scoped_3f6ce497_lang = "";
const ChecklistQuestion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3f6ce497"]]);
const questions = [
  {
    answers: [
      {
        id: "f:q0:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "f:q0:a1",
        elaboration: "E.g. keywords from the metadata are recognized by Search Engine Optimization tools such as https://validator.schema.org.",
        score: 1,
        text: "Yes"
      }
    ],
    id: "f:q0",
    principle: "f",
    text: "Is information from the software or its metadata consumed by local or global search engines to help rank their results?"
  },
  {
    answers: [
      {
        id: "a:q0:a0",
        elaboration: "E.g. The software is only identified by its name, which is not guaranteed to be or remain unique.",
        score: 0,
        text: "No"
      },
      {
        id: "a:q0:a1",
        elaboration: "E.g. The software is identifiable by its URL, or by its DOI.",
        score: 1,
        text: "Yes for at least some of the identifiers"
      }
    ],
    id: "a:q0",
    principle: "a",
    text: "Are the software's identifiers globally unique?"
  },
  {
    answers: [
      {
        id: "a:q1:a0",
        elaboration: "E.g. the software is identified by its filename, and a copy is stored on an individual's flash drive.",
        score: 0,
        text: "No"
      },
      {
        id: "a:q1:a1",
        elaboration: "E.g. the software is identified by URL or DOI, but the software itself is under embargo, proprietary, closed-source, or otherwise hidden from public view.",
        score: 1,
        text: "Yes for at least some of the identifiers, but the identifier only resolves to the software's metadata"
      },
      {
        id: "a:q1:a2",
        elaboration: "E.g. the software is identified by its name, and additionally by its URL or DOI.",
        score: 2,
        text: "Yes for at least some of the identifiers"
      }
    ],
    id: "a:q1",
    principle: "a",
    text: "Can a third party resolve the software's identifiers to a publicly accessible resource?"
  },
  {
    answers: [
      {
        id: "a:q2:a0",
        elaboration: "E.g. the identifiers include only the name of the software as a concept, but each version of that concept will have a different feature set. Or, the identifiers only include a filename or URL, whose content may be subject to change.",
        score: 0,
        text: "No"
      },
      {
        id: "a:q2:a1",
        elaboration: "E.g. The identifiers include a DOI, PURL, Handle, or some other persistent identifier. If the identifier is a concept DOI or collection DOI, the identifiers must also specify a version or version list.",
        score: 1,
        text: "Yes, at least some of the identifiers are persistent"
      },
      {
        id: "a:q2:a2",
        elaboration: "E.g. The software is a deposition on Zenodo.",
        score: 2,
        text: "Yes, as previous answer, and additionally the metadata will be available for some time after the software itself is no longer available"
      }
    ],
    id: "a:q2",
    principle: "a",
    text: "A few years from now, will the software's identifiers resolve to exactly the same content as they do today?"
  },
  {
    answers: [
      {
        id: "a:q3:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q3:a1",
        elaboration: "E.g. The software is retrievable through a URL that uses HTTP, HTTPS, FTP, or SFTP.",
        score: 1,
        text: "Yes"
      }
    ],
    id: "a:q3",
    principle: "a",
    text: "Is the software retrievable using a protocol that is open, free, and universally implementable?"
  },
  {
    answers: [
      {
        id: "a:q4:a0",
        elaboration: "",
        score: 0,
        text: "No"
      },
      {
        id: "a:q4:a1",
        elaboration: "",
        score: 1,
        text: "Yes"
      }
    ],
    id: "a:q4",
    principle: "a",
    text: "Is the software retrievable using a protocol that allows for authentication and authorization?"
  },
  {
    answers: [
      {
        id: "a:q5:a0",
        elaboration: "",
        score: 0,
        text: "The software is unlicensed"
      },
      {
        id: "a:q5:a1",
        elaboration: "E.g. the software's README includes a few lines about how the software may be used, but the legal meaning has not been tested or subjected to an audit.",
        score: 1,
        text: "The software is licensed with a non-standard license"
      },
      {
        id: "a:q5:a2",
        elaboration: "E.g. the software is bundled with a license text such as that of the MIT, MPL, or Apache-2.0 license.",
        score: 2,
        text: "The software is licensed with a standard license"
      },
      {
        id: "a:q5:a3",
        elaboration: "E.g. the software specifies its license in a metadata file such as pyproject.toml, package.json, CITATION.cff, .zenodo.json, codemeta.json, or R DESCRIPTION file.",
        score: 3,
        text: "As previous answer, and additionally, the license is machine readable"
      }
    ],
    id: "a:q5",
    principle: "a",
    text: "Which of the following best describes the software's usage rights?"
  },
  {
    answers: [
      {
        id: "a:q6:a0",
        elaboration: "",
        score: 0,
        text: "Not applicable, the software does not have any associated machine-readable metadata"
      },
      {
        id: "a:q6:a1",
        elaboration: "",
        score: 1,
        text: "Yes, the software's metadata include its name"
      },
      {
        id: "a:q6:a2",
        elaboration: "E.g. The metadata includes a URL that points to the software on GitHub, GitLab, SourceForge, PyPI, NPM or CRAN.",
        score: 2,
        text: "Yes, the software'a metadata includes a unique identifier to reference itself"
      },
      {
        id: "a:q6:a3",
        elaboration: "E.g. The metadata includes a DOI, pURL or Handle that points to an archived copy of the software.",
        score: 3,
        text: "Yes, the software's metadata includes a unique and persistent identifier to reference itself"
      }
    ],
    id: "a:q6",
    principle: "a",
    text: "Does the software's machine-readable metadata include an identifier to reference itself?"
  },
  {
    answers: [
      {
        id: "i:q0:a0",
        elaboration: "",
        score: 0,
        text: "Not applicable"
      },
      {
        id: "i:q0:a1",
        elaboration: "",
        score: 1,
        text: "The software reads, writes and exchanges data using proprietary formats only"
      },
      {
        id: "i:q0:a2",
        elaboration: "",
        score: 2,
        text: "The software uses open formats for at least some of the data it reads, writes, or exchanges"
      },
      {
        id: "i:q0:a3",
        elaboration: "",
        score: 3,
        text: "As previous answer, and additionally the formats are common for the domain"
      }
    ],
    id: "i:q0",
    principle: "i",
    text: "If the software reads, writes, or exchanges data, what type of formats are being used?"
  },
  {
    answers: [
      {
        id: "i:q1:a0",
        elaboration: "",
        score: 0,
        text: "Users of the software are supposed to always use the latest version"
      },
      {
        id: "i:q1:a1",
        elaboration: "E.g. The software is labeled according to the release date, the build number, etc.",
        score: 1,
        text: "The version identifier uses some form of increment at every release"
      },
      {
        id: "i:q1:a2",
        elaboration: "E.g. The software is labeled according to semantic versioning.",
        score: 2,
        text: "The version identifier reflects interoperability aspects"
      }
    ],
    id: "i:q1",
    principle: "i",
    text: "If any, what versioning strategy does the software adhere to?"
  },
  {
    answers: [
      {
        id: "r:q0:a0",
        elaboration: "",
        score: 0,
        text: "The software and its metadata do not include links to related data"
      },
      {
        id: "r:q0:a1",
        elaboration: "",
        score: 1,
        text: "The software and its metadata include at least some URI links to related data"
      },
      {
        id: "r:q0:a2",
        elaboration: "",
        score: 2,
        text: "As previous answer, with at least some of the links qualified and machine-readable"
      }
    ],
    id: "r:q0",
    principle: "r",
    text: "How is the software's relationship to related data described?"
  },
  {
    answers: [
      {
        id: "r:q1:a0",
        elaboration: "",
        score: 0,
        text: "The software and its metadata do not include links to related software"
      },
      {
        id: "r:q1:a1",
        elaboration: "",
        score: 1,
        text: "The software and its metadata include at least some URI links to related software"
      },
      {
        id: "r:q1:a2",
        elaboration: "",
        score: 2,
        text: "As previous answer, with at least some of the links qualified and machine-readable"
      }
    ],
    id: "r:q1",
    principle: "r",
    text: "How is the software's relationship to related software described?"
  },
  {
    answers: [
      {
        id: "r:q2:a0",
        elaboration: "",
        score: 0,
        text: "The software or its metadata do not include explicit information about the dependencies"
      },
      {
        id: "r:q2:a1",
        elaboration: "",
        score: 1,
        text: "The software or its metadata include the names of the dependencies"
      },
      {
        id: "r:q2:a2",
        elaboration: "",
        score: 2,
        text: "The software or its metadata include URI links to the software's dependencies"
      },
      {
        id: "r:q2:a3",
        elaboration: "",
        score: 3,
        text: "As previous answer, and additionally each link points to a specific version or version range of the dependency, and the list of dependencies includes all dependencies needed to get the software running again on a fresh install of the targeted operating systems"
      }
    ],
    id: "r:q2",
    principle: "r",
    text: "How are the software's dependencies specified?"
  },
  {
    answers: [
      {
        id: "r:q3:a0",
        elaboration: "",
        score: 0,
        text: "No, the software is made available in a non-accessible form"
      },
      {
        id: "r:q3:a1",
        elaboration: "",
        score: 0,
        text: "No, the software is in binary form and undocumented"
      },
      {
        id: "r:q3:a2",
        elaboration: "",
        score: 1,
        text: "Yes, the software is in binary form and sufficiently documented"
      },
      {
        id: "r:q3:a3",
        elaboration: "",
        score: 2,
        text: "Yes, the source code is available from a repository but does not include documentation"
      },
      {
        id: "r:q3:a4",
        elaboration: "",
        score: 3,
        text: "Yes, as previous answer, and additionally the software is available via a package manager or similar"
      },
      {
        id: "r:q3:a5",
        elaboration: "",
        score: 4,
        text: "Yes, the source code is available from a repository and includes sufficient  documentation"
      },
      {
        id: "r:q3:a6",
        elaboration: "",
        score: 5,
        text: "Yes, as previous answer, and additionally the software is available via a package manager or similar"
      }
    ],
    id: "r:q3",
    principle: "r",
    text: "Is the software made available in a form that allows for it to be understood, modified, built upon, or incorporated into other software?"
  },
  {
    answers: [
      {
        id: "r:q4:a0",
        elaboration: "",
        score: 0,
        text: "No, access to the binary or source code is not available"
      },
      {
        id: "r:q4:a1",
        elaboration: "",
        score: 0,
        text: "No, the software is only available as source code, and the software's dependency tree or compilation tool chain are insufficiently specified to facilitate reliable recompilation"
      },
      {
        id: "r:q4:a2",
        elaboration: "E.g. the software includes package manager files like package-lock.json, conanfile.txt, pyproject.toml, or requirements.txt that can be used to compile and run the software, or the software includes sufficient documentation to do so.",
        score: 1,
        text: "Yes, the software is only available as source code but can be compiled using information bundled with the software sources"
      },
      {
        id: "r:q4:a3",
        elaboration: "",
        score: 2,
        text: "Yes, the software and its dependency tree are made available in binary form using virtualization, containerization, Golang binaries, Windows .exe binaries, RPM binaries, or a similar method"
      }
    ],
    id: "r:q4",
    principle: "r",
    text: "Is the software executable?"
  }
];
const _withScopeId = (n) => (pushScopeId("data-v-1d77fbac"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Self-assessment checklist for FAIR software", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  setup(__props) {
    setQuestions(questions);
    const disableButton = ref(false);
    const getFullname = (principle) => ({
      f: "Findable",
      a: "Accessible",
      i: "Interoperable",
      r: "Reusable"
    })[principle];
    const scrollToBadgesSection = () => {
      var _a;
      (_a = document.getElementById("badges-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    onMounted(() => {
      window.onscroll = () => {
        const elementInViewport = (rect) => {
          const conditions = [
            rect.top >= 0,
            rect.left >= 0,
            rect.right <= (window.innerWidth || document.documentElement.clientWidth),
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ];
          return conditions.every((e) => e);
        };
        const elem = document.getElementById("badges-section");
        if (elem !== void 0 && elem !== null) {
          const rect = elem.getBoundingClientRect();
          disableButton.value = elementInViewport(rect);
        }
      };
      window.onbeforeunload = () => {
        const preserve = [
          window.location.origin,
          window.location.pathname,
          `?${fairQueryParams.value}`
        ].join("");
        window.history.pushState({}, "", preserve);
      };
    });
    const linkToDataChecklist = `${"/ssg/"}data/${latest.value.data}`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(ChecklistHeader),
        createBaseVNode("main", null, [
          _hoisted_1,
          createVNode(ChecklistBannerWIP),
          createVNode(ChecklistBannerVersions),
          createVNode(ChecklistBannerParams),
          unref(nQuestions).total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("p", null, [
              createTextVNode(" Answer the questions below to assess your software's FAIRness, or switch to the checklist for "),
              createVNode(ChecklistLink, { href: linkToDataChecklist }, {
                default: withCtx(() => [
                  createTextVNode("data")
                ]),
                _: 1
              }),
              createTextVNode(" instead. ")
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(principles), (principle) => {
              return openBlock(), createElementBlock("div", { key: principle }, [
                createBaseVNode("h2", null, toDisplayString(getFullname(principle)), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(questions$1).filter((q) => q.principle === principle), (question) => {
                  return openBlock(), createBlock(ChecklistQuestion, {
                    key: question.id,
                    question
                  }, null, 8, ["question"]);
                }), 128))
              ]);
            }), 128)),
            createVNode(ChecklistProgressBars, {
              progress: unref(progress),
              onClick: scrollToBadgesSection,
              disableButton: disableButton.value
            }, null, 8, ["progress", "disableButton"]),
            createVNode(ChecklistBadgeSnippets, { id: "badges-section" }),
            createVNode(ChecklistAbout)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(" Loading questions data... ")
          ], 64))
        ])
      ]);
    };
  }
});
const index_page_vue_vue_type_style_index_0_scoped_1d77fbac_lang = "";
const index_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d77fbac"]]);
export {
  index_page as default
};
