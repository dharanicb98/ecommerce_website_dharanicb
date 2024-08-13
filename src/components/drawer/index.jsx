'use client'
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import Done from '@mui/icons-material/Done';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { updateFilter } from '../slice/cartSlice'


const PRODUCT_CATEGORIES = ["electronics", "jewelery", "men's clothing", "women's clothing"]


export const DrawerFilters = ({open, setOpen, setFilterObj}) => {
//   const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(-1)
  const [ratingRange, setRatingRange] = useState(-1)


//   const dispatch = useDispatch();

  const updateFilterDetails = (enabled) => {
    setFilterObj((prev) => ({ enabled: enabled, categories: categories, priceRange: priceRange, ratingRange: ratingRange}))
    // dispatch(updateFilter({ enabled: enabled, categories: categories, priceRange: priceRange, ratingRange: ratingRange }));
  };


  const handleClear = () => {
    setCategories([]);
    setPriceRange(-1);
    setRatingRange(-1);
    setFilterObj((prev) => ({ enabled: false}))
    setOpen(false);
    // dispatch(updateFilter({ enabled: false }));
  };


  return (
    <React.Fragment>
      {/* <Button
        variant="outlined"
        color="neutral"
        startDecorator={<TuneIcon />}
        onClick={() => setOpen(true)}
      >
      </Button> */}
      <Drawer
        size="md"
        variant="plain"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>


            <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
              Categories
            </Typography>
            <div role="group" aria-labelledby="rank">
              <List
                orientation="vertical"
                size="sm"
                sx={{
                  '--List-gap': '12px',
                  '--ListItem-radius': '20px',
                }}
              >
                {PRODUCT_CATEGORIES.map((item) => {
                  const selected = categories.includes(item);
                  return (
                    <ListItem key={item}>
                      <AspectRatio
                        variant={selected ? 'solid' : 'outlined'}
                        color={selected ? 'primary' : 'neutral'}
                        ratio={1}
                        sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                      >
                        <div>{selected && <Done />}</div>
                      </AspectRatio>
                      <Checkbox
                        size="sm"
                        color="neutral"
                        disableIcon
                        overlay
                        label={item}
                        variant="outlined"
                        checked={selected}
                        onChange={(event) =>
                          setCategories((prev) => {
                            const set = new Set([...prev, item]);
                            if (!event.target.checked) {
                              set.delete(item);
                            }
                            return [...set];
                          })
                        }
                        slotProps={{
                          action: {
                            sx: {
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>


            <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
              Price Range Selector
            </Typography>
            <Box sx={{ width: 250 }}>
              <div>
                <div className="mb-4">
                  <input type="range" id="price-range" className="w-full accent-slate-800" min="0" max="5000" onChange={(e) => setPriceRange(parseInt(e.target.value))} />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">0</span>
                  <span id="maxPrice">$5000</span>
                </div>
              </div>
            </Box>


            <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
              Rating Range Selector
            </Typography>
            <Box sx={{ width: 250, color: '#1e293b' }}>
              <div>
                <div className="mb-4">
                  <input type="range" id="rating-range" className="w-full accent-slate-800" min="1" max="5"
                    onChange={(e) => setRatingRange(parseInt(e.target.value))} />
                </div>
                <div className="flex justify-between text-gray-500">
                  <span id="minPrice">1</span>
                  <span id="maxPrice">5</span>
                </div>
              </div>
            </Box>


          </DialogContent>


          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button onClick={() => {
              updateFilterDetails(true)
              setOpen(false)
            }}>Show</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
