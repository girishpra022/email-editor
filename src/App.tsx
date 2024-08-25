import { BlockManager, BasicType, AdvancedType } from 'easy-email-core';
import { BlockAvatarWrapper, EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import { ExtensionProps, StandardLayout } from 'easy-email-extensions';

import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import '@arco-themes/react-easy-email-theme/css/arco.css';

const initialValues = {
  subject: 'Welcome to Easy-email',
  subTitle: 'Nice to meet you!',
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.BUTTON,
        payload: {}
      },
      {
        type: AdvancedType.SOCIAL,
        
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
      {
        type: AdvancedType.TABLE,
      },
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      {
        title: '2 columns',
        payload: [
          ['50%', '50%'],
          ['33%', '67%'],
          ['67%', '33%'],
          ['25%', '75%'],
          ['75%', '25%'],
        ],
      },
      {
        title: '3 columns',
        payload: [
          ['33.33%', '33.33%', '33.33%'],
          ['25%', '25%', '50%'],
          ['50%', '25%', '25%'],
        ],
      },
      {
        title: '4 columns',
        payload: [['25%', '25%', '25%', '25%']],
      },
    ],
  },
  // {
  //   label: 'Custom',
  //   active: true,
  //   displayType: 'custom',
  //   blocks: [
  //     <BlockAvatarWrapper type={CustomBlocksType.PRODUCT_RECOMMENDATION}>
  //       <div
  //         style={{
  //           position: 'relative',
  //           border: '1px solid #ccc',
  //           marginBottom: 20,
  //           width: '80%',
  //           marginLeft: 'auto',
  //           marginRight: 'auto',
  //         }}
  //       >
  //         <img
  //           src={
  //             'http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841389/ctbjtig27parugrztdhk.png'
  //           }
  //           style={{
  //             maxWidth: '100%',
  //           }}
  //         />
  //         <div
  //           style={{
  //             position: 'absolute',
  //             top: 0,
  //             left: 0,
  //             width: '100%',
  //             height: '100%',
  //             zIndex: 2,
  //           }}
  //         />
  //       </div>
  //     </BlockAvatarWrapper>,
  //   ],
  // },
];


export default function App() {

  return (
    <EmailEditorProvider
      data={initialValues}
      height={'calc(100vh - 72px)'}
      autoComplete
      dashed={false}
    >
      {({ values }) => {
        return (
          <StandardLayout
            showSourceCode={true} categories={defaultCategories}         >
            <EmailEditor  />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
}