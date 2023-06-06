import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";


export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    // Only show preview pane on `movie` schema type documents
    if (schemaType === 'post') {
        return S.document().views([
          S.view.form(),

          S.view
            .component(Iframe)
            .options({
              url: `${ process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000" }/api/preview`,
              
              defaultSize: `desktop`,

              reload: {
                button: true,
            },
            attributes: {},
            })
            .title('Preview'),
        ])
    };
};