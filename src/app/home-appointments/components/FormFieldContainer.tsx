import { FormLabel, FormItem, FormControl } from '@/components/ui/form';

type FormFieldContainerProps = {
  label: string;
  fieldId: string;
  children: React.ReactNode;
};
export const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  fieldId,
  children,
}) => (
  // <div className='space-y-3 w-full mb-6 scroll-mt-32 '>

  <div className='space-y-3 w-full mb-6 scroll-mt-32 '>
    <FormLabel className='px-2 font-bold'>{label}</FormLabel>
    <FormItem>
      <FormControl id={fieldId}>{children}</FormControl>
    </FormItem>
  </div>
);
