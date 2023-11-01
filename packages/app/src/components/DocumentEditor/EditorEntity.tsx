import { DocumentEntityData, DocumentFieldValue, Form1003 } from "@urla1003/types";
import EditorField from "./EditorField";
import { FieldHoverEvent } from "../DocumentViewer/BoundingBoxCanvas";
import { useDocumentContext } from "../DocumentProvider";


interface EditorEntityProps {
    label: string;
    entityKey: string;
    fieldsModel: Form1003.DocumentEntityFieldsModel;
    fieldsValue?: DocumentEntityData;
    // hoveredField: FieldHoverEvent | null;
    // field
}

export default function DocumentEntity({ fieldsModel, fieldsValue, entityKey, label }: EditorEntityProps) {


    const {hoveredField, setHoveredField, isLoading} = useDocumentContext();

    return (
        <div className="bg-white border-b pt-4">
            <div className="flex items-center px-4">
                <h3 className="font-bold text-base">{label}</h3>
            </div>
            <div>
                {Object.keys(fieldsModel).map(fieldKey => {
                    const fieldModel = fieldsModel[fieldKey];
                    const fieldValue = fieldsValue ? fieldsValue[fieldKey] : undefined;
                    const isHovered = fieldKey === hoveredField?.fieldKey && entityKey === hoveredField.entityKey;

                    return (
                        <EditorField
                            key={`${entityKey}.${fieldKey}`}
                            label={fieldModel.label}
                            value={fieldValue?.value}
                            confidence={fieldValue?.confidence}
                            isHovering={isHovered}
                            isLoading={isLoading}
                            isEditing={false} //for future iteration
                            onMouseEnter={() => {
                                if (!isLoading) setHoveredField({
                                    entityKey: entityKey,
                                    fieldKey: fieldKey,
                                });
                            }}
                            onMouseLeave={() => setHoveredField(null)}
                        />
                    );
                })}
            </div>
        </div>
    );
}